import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";


// SlackConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Slack. 
**/
export class SlackConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @Metadata({ data: "json, name=oAuthRequest" })
  oAuthRequest?: ConnectorOAuthRequest;
}
