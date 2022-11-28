import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSummary } from "./compliancesummary";



// ComplianceSummaryByResourceType
/** 
 * The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.
**/
export class ComplianceSummaryByResourceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: ComplianceSummary;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
