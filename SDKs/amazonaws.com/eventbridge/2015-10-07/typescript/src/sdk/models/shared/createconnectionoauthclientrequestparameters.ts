import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateConnectionOAuthClientRequestParameters
/** 
 * Contains the Basic authorization parameters to use for the connection.
**/
export class CreateConnectionOAuthClientRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientID" })
  clientId: string;

  @Metadata({ data: "json, name=ClientSecret" })
  clientSecret: string;
}
