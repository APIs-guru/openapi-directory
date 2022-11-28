import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZendeskMetadata
/** 
 *  The connector metadata specific to Zendesk. 
**/
export class ZendeskMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
