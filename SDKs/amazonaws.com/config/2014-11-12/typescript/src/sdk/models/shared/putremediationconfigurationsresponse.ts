import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedRemediationBatch } from "./failedremediationbatch";


export class PutRemediationConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedBatches", elemType: shared.FailedRemediationBatch })
  failedBatches?: FailedRemediationBatch[];
}
