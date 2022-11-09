import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceNowConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using ServiceNow. 
**/
export class ServiceNowConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}
