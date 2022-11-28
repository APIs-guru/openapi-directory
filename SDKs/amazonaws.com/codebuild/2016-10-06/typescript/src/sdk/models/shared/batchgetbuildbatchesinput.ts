import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetBuildBatchesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}
