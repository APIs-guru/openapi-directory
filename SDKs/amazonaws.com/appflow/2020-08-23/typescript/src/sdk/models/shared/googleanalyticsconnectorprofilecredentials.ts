import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";



// GoogleAnalyticsConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required by Google Analytics. 
**/
export class GoogleAnalyticsConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=oAuthRequest" })
  oAuthRequest?: ConnectorOAuthRequest;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
