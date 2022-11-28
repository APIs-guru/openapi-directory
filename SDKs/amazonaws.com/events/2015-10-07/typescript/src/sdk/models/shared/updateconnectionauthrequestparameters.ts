import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateConnectionApiKeyAuthRequestParameters } from "./updateconnectionapikeyauthrequestparameters";
import { UpdateConnectionBasicAuthRequestParameters } from "./updateconnectionbasicauthrequestparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { UpdateConnectionOAuthRequestParameters } from "./updateconnectionoauthrequestparameters";



// UpdateConnectionAuthRequestParameters
/** 
 * Contains the additional parameters to use for the connection.
**/
export class UpdateConnectionAuthRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiKeyAuthParameters" })
  apiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters;

  @SpeakeasyMetadata({ data: "json, name=BasicAuthParameters" })
  basicAuthParameters?: UpdateConnectionBasicAuthRequestParameters;

  @SpeakeasyMetadata({ data: "json, name=InvocationHttpParameters" })
  invocationHttpParameters?: ConnectionHttpParameters;

  @SpeakeasyMetadata({ data: "json, name=OAuthParameters" })
  oAuthParameters?: UpdateConnectionOAuthRequestParameters;
}
