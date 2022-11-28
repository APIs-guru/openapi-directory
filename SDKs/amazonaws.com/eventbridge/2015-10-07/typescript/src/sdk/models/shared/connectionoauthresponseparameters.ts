import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionOAuthClientResponseParameters } from "./connectionoauthclientresponseparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { ConnectionHttpParameters } from "./connectionhttpparameters";



// ConnectionOAuthResponseParameters
/** 
 * Contains the response parameters when OAuth is specified as the authorization type.
**/
export class ConnectionOAuthResponseParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationEndpoint" })
  authorizationEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientParameters" })
  clientParameters?: ConnectionOAuthClientResponseParameters;

  @SpeakeasyMetadata({ data: "json, name=HttpMethod" })
  httpMethod?: ConnectionOAuthHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=OAuthHttpParameters" })
  oAuthHttpParameters?: ConnectionHttpParameters;
}
