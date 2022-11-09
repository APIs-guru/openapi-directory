import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateConnectionApiKeyAuthRequestParameters } from "./createconnectionapikeyauthrequestparameters";
import { CreateConnectionBasicAuthRequestParameters } from "./createconnectionbasicauthrequestparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { CreateConnectionOAuthRequestParameters } from "./createconnectionoauthrequestparameters";


// CreateConnectionAuthRequestParameters
/** 
 * Contains the authorization parameters for the connection.
**/
export class CreateConnectionAuthRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiKeyAuthParameters" })
  apiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters;

  @Metadata({ data: "json, name=BasicAuthParameters" })
  basicAuthParameters?: CreateConnectionBasicAuthRequestParameters;

  @Metadata({ data: "json, name=InvocationHttpParameters" })
  invocationHttpParameters?: ConnectionHttpParameters;

  @Metadata({ data: "json, name=OAuthParameters" })
  oAuthParameters?: CreateConnectionOAuthRequestParameters;
}
