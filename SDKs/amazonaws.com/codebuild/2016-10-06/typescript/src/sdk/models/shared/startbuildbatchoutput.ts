import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildBatch } from "./buildbatch";


export class StartBuildBatchOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildBatch" })
  buildBatch?: BuildBatch;
}
