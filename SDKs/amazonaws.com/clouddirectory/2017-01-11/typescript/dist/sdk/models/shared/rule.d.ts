import { SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeEnum } from "./ruletypeenum";
/**
 * Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.
**/
export declare class Rule extends SpeakeasyBase {
    parameters?: Map<string, string>;
    type?: RuleTypeEnum;
}
