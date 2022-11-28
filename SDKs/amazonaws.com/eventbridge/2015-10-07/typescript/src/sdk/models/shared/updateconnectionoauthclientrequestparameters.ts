import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateConnectionOAuthClientRequestParameters
/** 
 * Contains the OAuth authorization parameters to use for the connection.
**/
export class UpdateConnectionOAuthClientRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientSecret" })
  clientSecret?: string;
}
