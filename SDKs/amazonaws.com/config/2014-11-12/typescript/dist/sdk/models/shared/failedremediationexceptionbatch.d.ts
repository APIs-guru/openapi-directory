import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationException } from "./remediationexception";
/**
 * List of each of the failed remediation exceptions with specific reasons.
**/
export declare class FailedRemediationExceptionBatch extends SpeakeasyBase {
    failedItems?: RemediationException[];
    failureMessage?: string;
}
