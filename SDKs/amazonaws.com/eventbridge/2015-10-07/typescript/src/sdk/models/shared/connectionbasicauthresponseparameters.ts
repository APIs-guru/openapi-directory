import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionBasicAuthResponseParameters
/** 
 * Contains the authorization parameters for the connection if Basic is specified as the authorization type.
**/
export class ConnectionBasicAuthResponseParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Username" })
  username?: string;
}
