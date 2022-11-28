import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceContributorCount } from "./compliancecontributorcount";



// ComplianceSummary
/** 
 * The number of Config rules or Amazon Web Services resources that are compliant and noncompliant.
**/
export class ComplianceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceSummaryTimestamp" })
  complianceSummaryTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=CompliantResourceCount" })
  compliantResourceCount?: ComplianceContributorCount;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantResourceCount" })
  nonCompliantResourceCount?: ComplianceContributorCount;
}
