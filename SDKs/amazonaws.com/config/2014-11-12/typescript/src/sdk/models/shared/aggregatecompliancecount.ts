import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSummary } from "./compliancesummary";



// AggregateComplianceCount
/** 
 * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
**/
export class AggregateComplianceCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: ComplianceSummary;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;
}
