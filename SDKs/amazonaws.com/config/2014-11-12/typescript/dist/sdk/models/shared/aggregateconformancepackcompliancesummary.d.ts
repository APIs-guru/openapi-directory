import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateConformancePackComplianceCount } from "./aggregateconformancepackcompliancecount";
/**
 * Provides a summary of compliance based on either account ID or region.
**/
export declare class AggregateConformancePackComplianceSummary extends SpeakeasyBase {
    complianceSummary?: AggregateConformancePackComplianceCount;
    groupName?: string;
}
