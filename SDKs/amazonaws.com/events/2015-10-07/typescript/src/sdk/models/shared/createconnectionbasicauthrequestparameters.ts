import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateConnectionBasicAuthRequestParameters
/** 
 * Contains the Basic authorization parameters to use for the connection.
**/
export class CreateConnectionBasicAuthRequestParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
