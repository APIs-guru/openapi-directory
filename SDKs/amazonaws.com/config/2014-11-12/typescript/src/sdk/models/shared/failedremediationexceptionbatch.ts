import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemediationException } from "./remediationexception";


// FailedRemediationExceptionBatch
/** 
 * List of each of the failed remediation exceptions with specific reasons.
**/
export class FailedRemediationExceptionBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedItems", elemType: shared.RemediationException })
  failedItems?: RemediationException[];

  @Metadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;
}
