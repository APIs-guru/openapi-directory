import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// OnExitLifecycle
/** 
 * When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.
**/
export class OnExitLifecycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: Event })
  events?: Event[];
}
