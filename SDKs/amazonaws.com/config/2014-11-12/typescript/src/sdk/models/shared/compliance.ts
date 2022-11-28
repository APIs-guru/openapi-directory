import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceContributorCount } from "./compliancecontributorcount";
import { ComplianceTypeEnum } from "./compliancetypeenum";



// Compliance
/** 
 * Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.
**/
export class Compliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceContributorCount" })
  complianceContributorCount?: ComplianceContributorCount;

  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: ComplianceTypeEnum;
}
