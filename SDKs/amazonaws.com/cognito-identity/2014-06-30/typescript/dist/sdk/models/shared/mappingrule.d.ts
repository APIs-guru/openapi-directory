import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MappingRuleMatchTypeEnum } from "./mappingrulematchtypeenum";
/**
 * A rule that maps a claim name, a claim value, and a match type to a role ARN.
**/
export declare class MappingRule extends SpeakeasyBase {
    claim: string;
    matchType: MappingRuleMatchTypeEnum;
    roleArn: string;
    value: string;
}
