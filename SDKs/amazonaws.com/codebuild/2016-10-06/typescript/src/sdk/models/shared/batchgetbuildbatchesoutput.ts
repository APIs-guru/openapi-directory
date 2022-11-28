import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildBatch } from "./buildbatch";



export class BatchGetBuildBatchesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildBatches", elemType: BuildBatch })
  buildBatches?: BuildBatch[];

  @SpeakeasyMetadata({ data: "json, name=buildBatchesNotFound" })
  buildBatchesNotFound?: string[];
}
