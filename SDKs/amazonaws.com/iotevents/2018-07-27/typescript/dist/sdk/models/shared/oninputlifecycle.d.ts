import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
import { TransitionEvent } from "./transitionevent";
/**
 * Specifies the actions performed when the <code>condition</code> evaluates to TRUE.
**/
export declare class OnInputLifecycle extends SpeakeasyBase {
    events?: Event[];
    transitionEvents?: TransitionEvent[];
}
