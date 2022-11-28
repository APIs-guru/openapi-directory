import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
/**
 * <p/>
**/
export declare class DescribeComplianceByConfigRuleRequest extends SpeakeasyBase {
    complianceTypes?: ComplianceTypeEnum[];
    configRuleNames?: string[];
    nextToken?: string;
}
