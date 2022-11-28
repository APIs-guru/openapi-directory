import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";



// TransitionEvent
/** 
 * Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.
**/
export class TransitionEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition: string;

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=nextState" })
  nextState: string;
}
