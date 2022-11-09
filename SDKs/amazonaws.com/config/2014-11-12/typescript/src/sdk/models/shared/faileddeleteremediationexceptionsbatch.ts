import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";


// FailedDeleteRemediationExceptionsBatch
/** 
 * List of each of the failed delete remediation exceptions with specific reasons.
**/
export class FailedDeleteRemediationExceptionsBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedItems", elemType: shared.RemediationExceptionResourceKey })
  failedItems?: RemediationExceptionResourceKey[];

  @Metadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;
}
