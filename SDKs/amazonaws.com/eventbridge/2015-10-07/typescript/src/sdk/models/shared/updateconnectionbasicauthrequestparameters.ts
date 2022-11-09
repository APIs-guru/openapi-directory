import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateConnectionBasicAuthRequestParameters
/** 
 * Contains the Basic authorization parameters for the connection.
**/
export class UpdateConnectionBasicAuthRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
