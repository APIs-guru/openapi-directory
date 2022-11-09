import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildBatch } from "./buildbatch";


export class RetryBuildBatchOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildBatch" })
  buildBatch?: BuildBatch;
}
