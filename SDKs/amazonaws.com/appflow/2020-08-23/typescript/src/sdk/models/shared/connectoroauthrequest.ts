import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectorOAuthRequest
/** 
 *  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. 
**/
export class ConnectorOAuthRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authCode" })
  authCode?: string;

  @Metadata({ data: "json, name=redirectUri" })
  redirectUri?: string;
}
