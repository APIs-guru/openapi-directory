import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateConnectionApiKeyAuthRequestParameters } from "./updateconnectionapikeyauthrequestparameters";
import { UpdateConnectionBasicAuthRequestParameters } from "./updateconnectionbasicauthrequestparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { UpdateConnectionOAuthRequestParameters } from "./updateconnectionoauthrequestparameters";
/**
 * Contains the additional parameters to use for the connection.
**/
export declare class UpdateConnectionAuthRequestParameters extends SpeakeasyBase {
    apiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters;
    basicAuthParameters?: UpdateConnectionBasicAuthRequestParameters;
    invocationHttpParameters?: ConnectionHttpParameters;
    oAuthParameters?: UpdateConnectionOAuthRequestParameters;
}
