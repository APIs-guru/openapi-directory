import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionCredentials
/** 
 * Connection credentials. 
**/
export class ConnectionCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionToken" })
  connectionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Expiry" })
  expiry?: string;
}
