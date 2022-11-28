import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateConnectionOAuthClientRequestParameters } from "./createconnectionoauthclientrequestparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { ConnectionHttpParameters } from "./connectionhttpparameters";



// CreateConnectionOAuthRequestParameters
/** 
 * Contains the OAuth authorization parameters to use for the connection.
**/
export class CreateConnectionOAuthRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationEndpoint" })
  authorizationEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=ClientParameters" })
  clientParameters: CreateConnectionOAuthClientRequestParameters;

  @SpeakeasyMetadata({ data: "json, name=HttpMethod" })
  httpMethod: ConnectionOAuthHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=OAuthHttpParameters" })
  oAuthHttpParameters?: ConnectionHttpParameters;
}
