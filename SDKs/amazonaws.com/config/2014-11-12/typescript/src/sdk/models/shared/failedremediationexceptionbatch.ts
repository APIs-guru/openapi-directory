import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationException } from "./remediationexception";



// FailedRemediationExceptionBatch
/** 
 * List of each of the failed remediation exceptions with specific reasons.
**/
export class FailedRemediationExceptionBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedItems", elemType: RemediationException })
  failedItems?: RemediationException[];

  @SpeakeasyMetadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;
}
