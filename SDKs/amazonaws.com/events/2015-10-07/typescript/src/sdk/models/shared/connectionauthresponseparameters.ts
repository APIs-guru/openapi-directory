import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionApiKeyAuthResponseParameters } from "./connectionapikeyauthresponseparameters";
import { ConnectionBasicAuthResponseParameters } from "./connectionbasicauthresponseparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { ConnectionOAuthResponseParameters } from "./connectionoauthresponseparameters";


// ConnectionAuthResponseParameters
/** 
 * Contains the authorization parameters to use for the connection.
**/
export class ConnectionAuthResponseParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiKeyAuthParameters" })
  apiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters;

  @Metadata({ data: "json, name=BasicAuthParameters" })
  basicAuthParameters?: ConnectionBasicAuthResponseParameters;

  @Metadata({ data: "json, name=InvocationHttpParameters" })
  invocationHttpParameters?: ConnectionHttpParameters;

  @Metadata({ data: "json, name=OAuthParameters" })
  oAuthParameters?: ConnectionOAuthResponseParameters;
}
