import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
/**
 * Filters the compliance results based on account ID, region, compliance type, and rule name.
**/
export declare class ConfigRuleComplianceFilters extends SpeakeasyBase {
    accountId?: string;
    awsRegion?: string;
    complianceType?: ComplianceTypeEnum;
    configRuleName?: string;
}
