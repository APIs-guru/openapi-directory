import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";


export class GetMergeOptionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseCommitId" })
  baseCommitId: string;

  @Metadata({ data: "json, name=destinationCommitId" })
  destinationCommitId: string;

  @Metadata({ data: "json, name=mergeOptions" })
  mergeOptions: MergeOptionTypeEnumEnum[];

  @Metadata({ data: "json, name=sourceCommitId" })
  sourceCommitId: string;
}
