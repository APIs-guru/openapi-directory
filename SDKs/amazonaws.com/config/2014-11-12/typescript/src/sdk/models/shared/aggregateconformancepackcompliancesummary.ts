import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregateConformancePackComplianceCount } from "./aggregateconformancepackcompliancecount";


// AggregateConformancePackComplianceSummary
/** 
 * Provides a summary of compliance based on either account ID or region. 
**/
export class AggregateConformancePackComplianceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: AggregateConformancePackComplianceCount;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;
}
