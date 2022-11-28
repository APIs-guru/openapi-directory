import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Websocket
/** 
 * The websocket for the participant's connection.
**/
export class Websocket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionExpiry" })
  connectionExpiry?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
