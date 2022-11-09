import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionCredentials
/** 
 * Connection credentials. 
**/
export class ConnectionCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionToken" })
  connectionToken?: string;

  @Metadata({ data: "json, name=Expiry" })
  expiry?: string;
}
