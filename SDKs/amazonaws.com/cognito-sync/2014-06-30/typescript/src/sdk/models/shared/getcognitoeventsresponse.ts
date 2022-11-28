import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCognitoEventsResponse
/** 
 * The response from the GetCognitoEvents request
**/
export class GetCognitoEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events" })
  events?: Map<string, string>;
}
