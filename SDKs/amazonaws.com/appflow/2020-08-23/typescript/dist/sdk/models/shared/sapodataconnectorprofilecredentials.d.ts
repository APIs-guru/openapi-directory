import { SpeakeasyBase } from "../../../internal/utils";
import { BasicAuthCredentials } from "./basicauthcredentials";
import { OAuthCredentials } from "./oauthcredentials";
/**
 *  The connector-specific profile credentials required when using SAPOData.
**/
export declare class SapoDataConnectorProfileCredentials extends SpeakeasyBase {
    basicAuthCredentials?: BasicAuthCredentials;
    oAuthCredentials?: OAuthCredentials;
}
