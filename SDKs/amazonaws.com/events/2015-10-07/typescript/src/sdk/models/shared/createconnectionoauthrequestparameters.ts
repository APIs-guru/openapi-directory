import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateConnectionOAuthClientRequestParameters } from "./createconnectionoauthclientrequestparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { ConnectionHttpParameters } from "./connectionhttpparameters";


// CreateConnectionOAuthRequestParameters
/** 
 * Contains the OAuth authorization parameters to use for the connection.
**/
export class CreateConnectionOAuthRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationEndpoint" })
  authorizationEndpoint: string;

  @Metadata({ data: "json, name=ClientParameters" })
  clientParameters: CreateConnectionOAuthClientRequestParameters;

  @Metadata({ data: "json, name=HttpMethod" })
  httpMethod: ConnectionOAuthHttpMethodEnum;

  @Metadata({ data: "json, name=OAuthHttpParameters" })
  oAuthHttpParameters?: ConnectionHttpParameters;
}
