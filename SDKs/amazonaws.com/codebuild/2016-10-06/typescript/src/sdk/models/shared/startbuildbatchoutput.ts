import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildBatch } from "./buildbatch";



export class StartBuildBatchOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildBatch" })
  buildBatch?: BuildBatch;
}
