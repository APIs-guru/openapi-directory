import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateConnectionApiKeyAuthRequestParameters } from "./createconnectionapikeyauthrequestparameters";
import { CreateConnectionBasicAuthRequestParameters } from "./createconnectionbasicauthrequestparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { CreateConnectionOAuthRequestParameters } from "./createconnectionoauthrequestparameters";
/**
 * Contains the authorization parameters for the connection.
**/
export declare class CreateConnectionAuthRequestParameters extends SpeakeasyBase {
    apiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters;
    basicAuthParameters?: CreateConnectionBasicAuthRequestParameters;
    invocationHttpParameters?: ConnectionHttpParameters;
    oAuthParameters?: CreateConnectionOAuthRequestParameters;
}
