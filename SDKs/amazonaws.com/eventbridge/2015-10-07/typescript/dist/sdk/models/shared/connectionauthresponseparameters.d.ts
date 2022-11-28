import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionApiKeyAuthResponseParameters } from "./connectionapikeyauthresponseparameters";
import { ConnectionBasicAuthResponseParameters } from "./connectionbasicauthresponseparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { ConnectionOAuthResponseParameters } from "./connectionoauthresponseparameters";
/**
 * Contains the authorization parameters to use for the connection.
**/
export declare class ConnectionAuthResponseParameters extends SpeakeasyBase {
    apiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters;
    basicAuthParameters?: ConnectionBasicAuthResponseParameters;
    invocationHttpParameters?: ConnectionHttpParameters;
    oAuthParameters?: ConnectionOAuthResponseParameters;
}
