import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Event } from "./event";


// OnEnterLifecycle
/** 
 * When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.
**/
export class OnEnterLifecycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.Event })
  events?: Event[];
}
