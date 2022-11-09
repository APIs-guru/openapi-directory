import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Event } from "./event";
import { TransitionEvent } from "./transitionevent";


// OnInputLifecycle
/** 
 * Specifies the actions performed when the <code>condition</code> evaluates to TRUE.
**/
export class OnInputLifecycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.Event })
  events?: Event[];

  @Metadata({ data: "json, name=transitionEvents", elemType: shared.TransitionEvent })
  transitionEvents?: TransitionEvent[];
}
