import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
/**
 * <p/>
**/
export declare class GetComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
    complianceTypes?: ComplianceTypeEnum[];
    configRuleName: string;
    limit?: number;
    nextToken?: string;
}
