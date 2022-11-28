import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 *  The connector-specific profile credentials required by Google Analytics.
**/
export declare class GoogleAnalyticsConnectorProfileCredentials extends SpeakeasyBase {
    accessToken?: string;
    clientId: string;
    clientSecret: string;
    oAuthRequest?: ConnectorOAuthRequest;
    refreshToken?: string;
}
