import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VeevaConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Veeva. 
**/
export class VeevaConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}
