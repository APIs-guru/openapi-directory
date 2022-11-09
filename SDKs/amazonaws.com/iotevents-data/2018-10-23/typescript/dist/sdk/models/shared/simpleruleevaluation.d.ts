import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
/**
 * Information needed to compare two values with a comparison operator.
**/
export declare class SimpleRuleEvaluation extends SpeakeasyBase {
    inputPropertyValue?: string;
    operator?: ComparisonOperatorEnum;
    thresholdValue?: string;
}
