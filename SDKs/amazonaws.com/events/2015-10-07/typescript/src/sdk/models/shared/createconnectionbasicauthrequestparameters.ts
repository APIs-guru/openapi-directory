import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateConnectionBasicAuthRequestParameters
/** 
 * Contains the Basic authorization parameters to use for the connection.
**/
export class CreateConnectionBasicAuthRequestParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
