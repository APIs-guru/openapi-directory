import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildBatch } from "./buildbatch";



export class RetryBuildBatchOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildBatch" })
  buildBatch?: BuildBatch;
}
