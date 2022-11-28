import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";



// FailedDeleteRemediationExceptionsBatch
/** 
 * List of each of the failed delete remediation exceptions with specific reasons.
**/
export class FailedDeleteRemediationExceptionsBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedItems", elemType: RemediationExceptionResourceKey })
  failedItems?: RemediationExceptionResourceKey[];

  @SpeakeasyMetadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;
}
