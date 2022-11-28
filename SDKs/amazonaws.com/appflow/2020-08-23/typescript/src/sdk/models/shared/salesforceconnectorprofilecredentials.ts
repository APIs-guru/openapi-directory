import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";



// SalesforceConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Salesforce. 
**/
export class SalesforceConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=clientCredentialsArn" })
  clientCredentialsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=oAuthRequest" })
  oAuthRequest?: ConnectorOAuthRequest;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
