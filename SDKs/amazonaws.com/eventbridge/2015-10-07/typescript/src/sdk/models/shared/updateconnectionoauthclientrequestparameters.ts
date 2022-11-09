import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateConnectionOAuthClientRequestParameters
/** 
 * Contains the OAuth authorization parameters to use for the connection.
**/
export class UpdateConnectionOAuthClientRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientID" })
  clientId?: string;

  @Metadata({ data: "json, name=ClientSecret" })
  clientSecret?: string;
}
