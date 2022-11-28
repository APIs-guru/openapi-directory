import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VeevaConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Veeva. 
**/
export class VeevaConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
