import { SpeakeasyBase } from "../../../internal/utils";
import { CreateConnectionOAuthClientRequestParameters } from "./createconnectionoauthclientrequestparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
/**
 * Contains the OAuth authorization parameters to use for the connection.
**/
export declare class CreateConnectionOAuthRequestParameters extends SpeakeasyBase {
    authorizationEndpoint: string;
    clientParameters: CreateConnectionOAuthClientRequestParameters;
    httpMethod: ConnectionOAuthHttpMethodEnum;
    oAuthHttpParameters?: ConnectionHttpParameters;
}
