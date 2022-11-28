import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionOAuthClientResponseParameters
/** 
 * Contains the client response parameters for the connection when OAuth is specified as the authorization type.
**/
export class ConnectionOAuthClientResponseParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientID" })
  clientId?: string;
}
