import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZendeskConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Zendesk. 
**/
export class ZendeskConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
