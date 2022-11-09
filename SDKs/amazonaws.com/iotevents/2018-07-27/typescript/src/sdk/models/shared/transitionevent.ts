import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";


// TransitionEvent
/** 
 * Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.
**/
export class TransitionEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: Action[];

  @Metadata({ data: "json, name=condition" })
  condition: string;

  @Metadata({ data: "json, name=eventName" })
  eventName: string;

  @Metadata({ data: "json, name=nextState" })
  nextState: string;
}
