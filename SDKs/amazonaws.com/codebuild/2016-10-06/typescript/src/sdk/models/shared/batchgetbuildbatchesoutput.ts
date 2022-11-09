import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildBatch } from "./buildbatch";


export class BatchGetBuildBatchesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildBatches", elemType: shared.BuildBatch })
  buildBatches?: BuildBatch[];

  @Metadata({ data: "json, name=buildBatchesNotFound" })
  buildBatchesNotFound?: string[];
}
