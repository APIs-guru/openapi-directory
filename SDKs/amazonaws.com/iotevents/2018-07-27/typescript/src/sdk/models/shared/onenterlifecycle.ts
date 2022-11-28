import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// OnEnterLifecycle
/** 
 * When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.
**/
export class OnEnterLifecycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: Event })
  events?: Event[];
}
