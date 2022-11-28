import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IotEventsInputIdentifier
/** 
 *  The identifier of the input routed to AWS IoT Events. 
**/
export class IotEventsInputIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputName" })
  inputName: string;
}
