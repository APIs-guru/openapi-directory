import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";



export class GetMergeOptionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseCommitId" })
  baseCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=destinationCommitId" })
  destinationCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=mergeOptions" })
  mergeOptions: MergeOptionTypeEnumEnum[];

  @SpeakeasyMetadata({ data: "json, name=sourceCommitId" })
  sourceCommitId: string;
}
