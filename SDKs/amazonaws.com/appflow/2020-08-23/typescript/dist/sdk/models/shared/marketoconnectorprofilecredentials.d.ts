import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 *  The connector-specific profile credentials required by Marketo.
**/
export declare class MarketoConnectorProfileCredentials extends SpeakeasyBase {
    accessToken?: string;
    clientId: string;
    clientSecret: string;
    oAuthRequest?: ConnectorOAuthRequest;
}
