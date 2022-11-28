import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceContributorCount } from "./compliancecontributorcount";
/**
 * The number of Config rules or Amazon Web Services resources that are compliant and noncompliant.
**/
export declare class ComplianceSummary extends SpeakeasyBase {
    complianceSummaryTimestamp?: Date;
    compliantResourceCount?: ComplianceContributorCount;
    nonCompliantResourceCount?: ComplianceContributorCount;
}
