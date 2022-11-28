import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceContributorCount } from "./compliancecontributorcount";
import { ComplianceTypeEnum } from "./compliancetypeenum";
/**
 * Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.
**/
export declare class Compliance extends SpeakeasyBase {
    complianceContributorCount?: ComplianceContributorCount;
    complianceType?: ComplianceTypeEnum;
}
