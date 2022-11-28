import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";



// IotEventsAction
/** 
 * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
**/
export class IotEventsAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputName" })
  inputName: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Payload;
}
