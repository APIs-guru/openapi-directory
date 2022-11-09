import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetBuildBatchesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: string[];
}
