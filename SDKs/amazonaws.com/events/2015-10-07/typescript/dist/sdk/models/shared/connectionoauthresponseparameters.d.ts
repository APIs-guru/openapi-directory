import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionOAuthClientResponseParameters } from "./connectionoauthclientresponseparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
/**
 * Contains the response parameters when OAuth is specified as the authorization type.
**/
export declare class ConnectionOAuthResponseParameters extends SpeakeasyBase {
    authorizationEndpoint?: string;
    clientParameters?: ConnectionOAuthClientResponseParameters;
    httpMethod?: ConnectionOAuthHttpMethodEnum;
    oAuthHttpParameters?: ConnectionHttpParameters;
}
