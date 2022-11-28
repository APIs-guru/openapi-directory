import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateConnectionOAuthClientRequestParameters
/** 
 * Contains the Basic authorization parameters to use for the connection.
**/
export class CreateConnectionOAuthClientRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientID" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientSecret" })
  clientSecret: string;
}
