import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Action } from "./action";


// ActionHistoryDetails
/** 
 *  The description of details of the event. 
**/
export class ActionHistoryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: Action;

  @Metadata({ data: "json, name=Message" })
  message: string;
}
