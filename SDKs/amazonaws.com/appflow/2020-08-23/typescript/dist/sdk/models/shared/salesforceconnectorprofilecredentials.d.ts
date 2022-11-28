import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 *  The connector-specific profile credentials required when using Salesforce.
**/
export declare class SalesforceConnectorProfileCredentials extends SpeakeasyBase {
    accessToken?: string;
    clientCredentialsArn?: string;
    oAuthRequest?: ConnectorOAuthRequest;
    refreshToken?: string;
}
