import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedDeleteRemediationExceptionsBatch } from "./faileddeleteremediationexceptionsbatch";



export class DeleteRemediationExceptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedBatches", elemType: FailedDeleteRemediationExceptionsBatch })
  failedBatches?: FailedDeleteRemediationExceptionsBatch[];
}
