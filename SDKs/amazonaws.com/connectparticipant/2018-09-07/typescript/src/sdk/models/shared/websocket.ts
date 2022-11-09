import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Websocket
/** 
 * The websocket for the participant's connection.
**/
export class Websocket extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionExpiry" })
  connectionExpiry?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
