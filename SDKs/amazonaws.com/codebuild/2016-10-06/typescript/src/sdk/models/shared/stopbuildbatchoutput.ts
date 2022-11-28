import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildBatch } from "./buildbatch";



export class StopBuildBatchOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildBatch" })
  buildBatch?: BuildBatch;
}
