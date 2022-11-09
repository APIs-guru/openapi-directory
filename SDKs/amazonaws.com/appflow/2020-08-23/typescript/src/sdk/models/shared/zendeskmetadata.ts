import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZendeskMetadata
/** 
 *  The connector metadata specific to Zendesk. 
**/
export class ZendeskMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
