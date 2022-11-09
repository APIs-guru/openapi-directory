import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IotEventsInputIdentifier
/** 
 *  The identifier of the input routed to AWS IoT Events. 
**/
export class IotEventsInputIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputName" })
  inputName: string;
}
