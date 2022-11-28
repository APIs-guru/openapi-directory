import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateConnectionBasicAuthRequestParameters
/** 
 * Contains the Basic authorization parameters for the connection.
**/
export class UpdateConnectionBasicAuthRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
