import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedRemediationBatch } from "./failedremediationbatch";



export class PutRemediationConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedBatches", elemType: FailedRemediationBatch })
  failedBatches?: FailedRemediationBatch[];
}
