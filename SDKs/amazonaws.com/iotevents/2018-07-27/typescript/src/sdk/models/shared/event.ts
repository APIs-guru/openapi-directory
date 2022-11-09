import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";


// Event
/** 
 * Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: Action[];

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=eventName" })
  eventName: string;
}
