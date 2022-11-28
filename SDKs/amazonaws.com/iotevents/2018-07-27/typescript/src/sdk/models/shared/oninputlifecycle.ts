import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
import { TransitionEvent } from "./transitionevent";



// OnInputLifecycle
/** 
 * Specifies the actions performed when the <code>condition</code> evaluates to TRUE.
**/
export class OnInputLifecycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata({ data: "json, name=transitionEvents", elemType: TransitionEvent })
  transitionEvents?: TransitionEvent[];
}
