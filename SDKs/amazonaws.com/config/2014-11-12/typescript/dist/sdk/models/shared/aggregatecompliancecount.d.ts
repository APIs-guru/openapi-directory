import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSummary } from "./compliancesummary";
/**
 * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
**/
export declare class AggregateComplianceCount extends SpeakeasyBase {
    complianceSummary?: ComplianceSummary;
    groupName?: string;
}
