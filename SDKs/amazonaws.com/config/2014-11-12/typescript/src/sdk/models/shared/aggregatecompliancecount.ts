import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceSummary } from "./compliancesummary";


// AggregateComplianceCount
/** 
 * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
**/
export class AggregateComplianceCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: ComplianceSummary;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;
}
