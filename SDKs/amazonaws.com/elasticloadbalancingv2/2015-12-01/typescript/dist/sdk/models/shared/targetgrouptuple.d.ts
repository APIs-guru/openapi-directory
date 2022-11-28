import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about how traffic will be distributed between multiple target groups in a forward rule.
**/
export declare class TargetGroupTuple extends SpeakeasyBase {
    targetGroupArn?: string;
    weight?: number;
}
