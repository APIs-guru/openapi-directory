import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateConnectionApiKeyAuthRequestParameters } from "./updateconnectionapikeyauthrequestparameters";
import { UpdateConnectionBasicAuthRequestParameters } from "./updateconnectionbasicauthrequestparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { UpdateConnectionOAuthRequestParameters } from "./updateconnectionoauthrequestparameters";


// UpdateConnectionAuthRequestParameters
/** 
 * Contains the additional parameters to use for the connection.
**/
export class UpdateConnectionAuthRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiKeyAuthParameters" })
  apiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters;

  @Metadata({ data: "json, name=BasicAuthParameters" })
  basicAuthParameters?: UpdateConnectionBasicAuthRequestParameters;

  @Metadata({ data: "json, name=InvocationHttpParameters" })
  invocationHttpParameters?: ConnectionHttpParameters;

  @Metadata({ data: "json, name=OAuthParameters" })
  oAuthParameters?: UpdateConnectionOAuthRequestParameters;
}
