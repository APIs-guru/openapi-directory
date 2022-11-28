import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information needed to set the timer.
**/
export declare class SetTimerAction extends SpeakeasyBase {
    durationExpression?: string;
    seconds?: number;
    timerName: string;
}
