import { SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
/**
 * A rule that compares an input property value to a threshold value with a comparison operator.
**/
export declare class SimpleRule extends SpeakeasyBase {
    comparisonOperator: ComparisonOperatorEnum;
    inputProperty: string;
    threshold: string;
}
