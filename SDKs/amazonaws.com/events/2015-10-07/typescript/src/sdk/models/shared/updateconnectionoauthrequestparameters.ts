import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateConnectionOAuthClientRequestParameters } from "./updateconnectionoauthclientrequestparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { ConnectionHttpParameters } from "./connectionhttpparameters";


// UpdateConnectionOAuthRequestParameters
/** 
 * Contains the OAuth request parameters to use for the connection.
**/
export class UpdateConnectionOAuthRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationEndpoint" })
  authorizationEndpoint?: string;

  @Metadata({ data: "json, name=ClientParameters" })
  clientParameters?: UpdateConnectionOAuthClientRequestParameters;

  @Metadata({ data: "json, name=HttpMethod" })
  httpMethod?: ConnectionOAuthHttpMethodEnum;

  @Metadata({ data: "json, name=OAuthHttpParameters" })
  oAuthHttpParameters?: ConnectionHttpParameters;
}
