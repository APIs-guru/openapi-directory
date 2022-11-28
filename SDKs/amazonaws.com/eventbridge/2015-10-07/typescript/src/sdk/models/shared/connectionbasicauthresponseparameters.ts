import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionBasicAuthResponseParameters
/** 
 * Contains the authorization parameters for the connection if Basic is specified as the authorization type.
**/
export class ConnectionBasicAuthResponseParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
