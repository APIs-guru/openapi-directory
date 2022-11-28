import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateConformancePackComplianceCount } from "./aggregateconformancepackcompliancecount";



// AggregateConformancePackComplianceSummary
/** 
 * Provides a summary of compliance based on either account ID or region. 
**/
export class AggregateConformancePackComplianceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: AggregateConformancePackComplianceCount;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;
}
