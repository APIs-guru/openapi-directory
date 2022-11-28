import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
**/
export declare class ResetTimerAction extends SpeakeasyBase {
    timerName: string;
}
