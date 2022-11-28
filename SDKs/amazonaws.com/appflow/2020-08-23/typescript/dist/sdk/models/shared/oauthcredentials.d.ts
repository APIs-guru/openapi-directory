import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 *  The OAuth credentials required for OAuth type authentication.
**/
export declare class OAuthCredentials extends SpeakeasyBase {
    accessToken?: string;
    clientId: string;
    clientSecret: string;
    oAuthRequest?: ConnectorOAuthRequest;
    refreshToken?: string;
}
