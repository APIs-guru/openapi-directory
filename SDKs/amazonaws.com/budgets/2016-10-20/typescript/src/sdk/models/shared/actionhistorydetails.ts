import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";



// ActionHistoryDetails
/** 
 *  The description of details of the event. 
**/
export class ActionHistoryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: Action;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;
}
