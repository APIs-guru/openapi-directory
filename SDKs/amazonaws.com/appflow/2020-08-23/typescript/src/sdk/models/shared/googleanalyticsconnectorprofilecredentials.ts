import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";


// GoogleAnalyticsConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required by Google Analytics. 
**/
export class GoogleAnalyticsConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @Metadata({ data: "json, name=oAuthRequest" })
  oAuthRequest?: ConnectorOAuthRequest;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
