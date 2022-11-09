import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedDeleteRemediationExceptionsBatch } from "./faileddeleteremediationexceptionsbatch";


export class DeleteRemediationExceptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedBatches", elemType: shared.FailedDeleteRemediationExceptionsBatch })
  failedBatches?: FailedDeleteRemediationExceptionsBatch[];
}
