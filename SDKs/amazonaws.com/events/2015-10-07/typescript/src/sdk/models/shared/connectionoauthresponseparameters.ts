import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionOAuthClientResponseParameters } from "./connectionoauthclientresponseparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { ConnectionHttpParameters } from "./connectionhttpparameters";


// ConnectionOAuthResponseParameters
/** 
 * Contains the response parameters when OAuth is specified as the authorization type.
**/
export class ConnectionOAuthResponseParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationEndpoint" })
  authorizationEndpoint?: string;

  @Metadata({ data: "json, name=ClientParameters" })
  clientParameters?: ConnectionOAuthClientResponseParameters;

  @Metadata({ data: "json, name=HttpMethod" })
  httpMethod?: ConnectionOAuthHttpMethodEnum;

  @Metadata({ data: "json, name=OAuthHttpParameters" })
  oAuthHttpParameters?: ConnectionHttpParameters;
}
