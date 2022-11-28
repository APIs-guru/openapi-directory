import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";



// MarketoConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required by Marketo. 
**/
export class MarketoConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=oAuthRequest" })
  oAuthRequest?: ConnectorOAuthRequest;
}
