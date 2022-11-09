import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Event } from "./event";


// OnExitLifecycle
/** 
 * When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.
**/
export class OnExitLifecycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.Event })
  events?: Event[];
}
