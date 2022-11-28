import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
/**
 * Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.
**/
export declare class TransitionEvent extends SpeakeasyBase {
    actions?: Action[];
    condition: string;
    eventName: string;
    nextState: string;
}
