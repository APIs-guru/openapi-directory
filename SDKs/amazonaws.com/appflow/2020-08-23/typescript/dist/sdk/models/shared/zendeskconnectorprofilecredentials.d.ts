import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 *  The connector-specific profile credentials required when using Zendesk.
**/
export declare class ZendeskConnectorProfileCredentials extends SpeakeasyBase {
    accessToken?: string;
    clientId: string;
    clientSecret: string;
    oAuthRequest?: ConnectorOAuthRequest;
}
