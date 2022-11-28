import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateConnectionApiKeyAuthRequestParameters } from "./createconnectionapikeyauthrequestparameters";
import { CreateConnectionBasicAuthRequestParameters } from "./createconnectionbasicauthrequestparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { CreateConnectionOAuthRequestParameters } from "./createconnectionoauthrequestparameters";



// CreateConnectionAuthRequestParameters
/** 
 * Contains the authorization parameters for the connection.
**/
export class CreateConnectionAuthRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiKeyAuthParameters" })
  apiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters;

  @SpeakeasyMetadata({ data: "json, name=BasicAuthParameters" })
  basicAuthParameters?: CreateConnectionBasicAuthRequestParameters;

  @SpeakeasyMetadata({ data: "json, name=InvocationHttpParameters" })
  invocationHttpParameters?: ConnectionHttpParameters;

  @SpeakeasyMetadata({ data: "json, name=OAuthParameters" })
  oAuthParameters?: CreateConnectionOAuthRequestParameters;
}
