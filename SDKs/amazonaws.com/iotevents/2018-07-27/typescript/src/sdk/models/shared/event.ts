import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";



// Event
/** 
 * Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName: string;
}
