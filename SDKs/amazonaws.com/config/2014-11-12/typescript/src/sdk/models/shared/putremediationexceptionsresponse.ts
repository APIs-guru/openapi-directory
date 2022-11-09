import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedRemediationExceptionBatch } from "./failedremediationexceptionbatch";


export class PutRemediationExceptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedBatches", elemType: shared.FailedRemediationExceptionBatch })
  failedBatches?: FailedRemediationExceptionBatch[];
}
