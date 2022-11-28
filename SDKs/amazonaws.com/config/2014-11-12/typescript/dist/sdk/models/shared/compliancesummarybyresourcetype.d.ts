import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSummary } from "./compliancesummary";
/**
 * The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.
**/
export declare class ComplianceSummaryByResourceType extends SpeakeasyBase {
    complianceSummary?: ComplianceSummary;
    resourceType?: string;
}
