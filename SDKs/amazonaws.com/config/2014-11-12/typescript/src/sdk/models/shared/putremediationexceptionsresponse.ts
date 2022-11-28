import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedRemediationExceptionBatch } from "./failedremediationexceptionbatch";



export class PutRemediationExceptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedBatches", elemType: FailedRemediationExceptionBatch })
  failedBatches?: FailedRemediationExceptionBatch[];
}
