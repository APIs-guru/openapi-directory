import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZendeskConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Zendesk. 
**/
export class ZendeskConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
