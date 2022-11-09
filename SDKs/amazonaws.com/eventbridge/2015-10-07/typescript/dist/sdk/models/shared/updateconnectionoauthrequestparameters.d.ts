import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateConnectionOAuthClientRequestParameters } from "./updateconnectionoauthclientrequestparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
/**
 * Contains the OAuth request parameters to use for the connection.
**/
export declare class UpdateConnectionOAuthRequestParameters extends SpeakeasyBase {
    authorizationEndpoint?: string;
    clientParameters?: UpdateConnectionOAuthClientRequestParameters;
    httpMethod?: ConnectionOAuthHttpMethodEnum;
    oAuthHttpParameters?: ConnectionHttpParameters;
}
