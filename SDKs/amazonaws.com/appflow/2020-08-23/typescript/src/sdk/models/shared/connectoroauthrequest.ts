import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectorOAuthRequest
/** 
 *  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. 
**/
export class ConnectorOAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authCode" })
  authCode?: string;

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;
}
