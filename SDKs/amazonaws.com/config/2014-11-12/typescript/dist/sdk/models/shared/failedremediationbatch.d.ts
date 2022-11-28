import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationConfiguration } from "./remediationconfiguration";
/**
 * List of each of the failed remediations with specific reasons.
**/
export declare class FailedRemediationBatch extends SpeakeasyBase {
    failedItems?: RemediationConfiguration[];
    failureMessage?: string;
}
