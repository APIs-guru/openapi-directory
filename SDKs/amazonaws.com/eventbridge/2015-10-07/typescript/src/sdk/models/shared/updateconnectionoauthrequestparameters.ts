import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateConnectionOAuthClientRequestParameters } from "./updateconnectionoauthclientrequestparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { ConnectionHttpParameters } from "./connectionhttpparameters";



// UpdateConnectionOAuthRequestParameters
/** 
 * Contains the OAuth request parameters to use for the connection.
**/
export class UpdateConnectionOAuthRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationEndpoint" })
  authorizationEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientParameters" })
  clientParameters?: UpdateConnectionOAuthClientRequestParameters;

  @SpeakeasyMetadata({ data: "json, name=HttpMethod" })
  httpMethod?: ConnectionOAuthHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=OAuthHttpParameters" })
  oAuthHttpParameters?: ConnectionHttpParameters;
}
