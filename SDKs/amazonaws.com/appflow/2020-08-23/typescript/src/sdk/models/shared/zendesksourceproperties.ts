import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZendeskSourceProperties
/** 
 *  The properties that are applied when using Zendesk as a flow source. 
**/
export class ZendeskSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
