import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceContributorCount } from "./compliancecontributorcount";
import { ComplianceTypeEnum } from "./compliancetypeenum";


// Compliance
/** 
 * Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.
**/
export class Compliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceContributorCount" })
  complianceContributorCount?: ComplianceContributorCount;

  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: ComplianceTypeEnum;
}
