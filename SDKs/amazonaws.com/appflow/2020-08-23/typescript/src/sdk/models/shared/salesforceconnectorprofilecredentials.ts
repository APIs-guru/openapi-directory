import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";


// SalesforceConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Salesforce. 
**/
export class SalesforceConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=clientCredentialsArn" })
  clientCredentialsArn?: string;

  @Metadata({ data: "json, name=oAuthRequest" })
  oAuthRequest?: ConnectorOAuthRequest;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
