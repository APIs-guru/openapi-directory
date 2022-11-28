import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorOAuthRequest } from "./connectoroauthrequest";
/**
 *  The connector-specific credentials required when using Amazon Honeycode.
**/
export declare class HoneycodeConnectorProfileCredentials extends SpeakeasyBase {
    accessToken?: string;
    oAuthRequest?: ConnectorOAuthRequest;
    refreshToken?: string;
}
