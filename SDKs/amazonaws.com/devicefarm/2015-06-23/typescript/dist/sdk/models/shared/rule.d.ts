import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceAttributeEnum } from "./deviceattributeenum";
import { RuleOperatorEnum } from "./ruleoperatorenum";
/**
 * Represents a condition for a device pool.
**/
export declare class Rule extends SpeakeasyBase {
    attribute?: DeviceAttributeEnum;
    operator?: RuleOperatorEnum;
    value?: string;
}
