import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceSummary } from "./compliancesummary";


// ComplianceSummaryByResourceType
/** 
 * The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.
**/
export class ComplianceSummaryByResourceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: ComplianceSummary;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
