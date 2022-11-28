import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";



// ZendeskConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Zendesk. 
**/
export class ZendeskConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=oAuthRequest" })
  oAuthRequest?: ConnectorOAuthRequest;
}
