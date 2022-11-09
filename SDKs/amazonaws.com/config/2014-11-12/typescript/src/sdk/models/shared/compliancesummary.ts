import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceContributorCount } from "./compliancecontributorcount";
import { ComplianceContributorCount } from "./compliancecontributorcount";


// ComplianceSummary
/** 
 * The number of Config rules or Amazon Web Services resources that are compliant and noncompliant.
**/
export class ComplianceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceSummaryTimestamp" })
  complianceSummaryTimestamp?: Date;

  @Metadata({ data: "json, name=CompliantResourceCount" })
  compliantResourceCount?: ComplianceContributorCount;

  @Metadata({ data: "json, name=NonCompliantResourceCount" })
  nonCompliantResourceCount?: ComplianceContributorCount;
}
