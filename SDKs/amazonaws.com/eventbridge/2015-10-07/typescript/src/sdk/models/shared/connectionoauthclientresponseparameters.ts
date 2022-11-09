import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionOAuthClientResponseParameters
/** 
 * Contains the client response parameters for the connection when OAuth is specified as the authorization type.
**/
export class ConnectionOAuthClientResponseParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientID" })
  clientId?: string;
}
