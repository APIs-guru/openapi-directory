import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationExceptionResourceKey } from "./remediationexceptionresourcekey";
/**
 * List of each of the failed delete remediation exceptions with specific reasons.
**/
export declare class FailedDeleteRemediationExceptionsBatch extends SpeakeasyBase {
    failedItems?: RemediationExceptionResourceKey[];
    failureMessage?: string;
}
