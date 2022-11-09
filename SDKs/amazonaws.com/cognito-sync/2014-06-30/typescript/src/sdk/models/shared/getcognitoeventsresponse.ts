import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetCognitoEventsResponse
/** 
 * The response from the GetCognitoEvents request
**/
export class GetCognitoEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Events" })
  events?: Map<string, string>;
}
