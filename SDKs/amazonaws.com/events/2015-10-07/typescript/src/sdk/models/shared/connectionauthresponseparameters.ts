import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionApiKeyAuthResponseParameters } from "./connectionapikeyauthresponseparameters";
import { ConnectionBasicAuthResponseParameters } from "./connectionbasicauthresponseparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { ConnectionOAuthResponseParameters } from "./connectionoauthresponseparameters";



// ConnectionAuthResponseParameters
/** 
 * Contains the authorization parameters to use for the connection.
**/
export class ConnectionAuthResponseParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiKeyAuthParameters" })
  apiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters;

  @SpeakeasyMetadata({ data: "json, name=BasicAuthParameters" })
  basicAuthParameters?: ConnectionBasicAuthResponseParameters;

  @SpeakeasyMetadata({ data: "json, name=InvocationHttpParameters" })
  invocationHttpParameters?: ConnectionHttpParameters;

  @SpeakeasyMetadata({ data: "json, name=OAuthParameters" })
  oAuthParameters?: ConnectionOAuthResponseParameters;
}
