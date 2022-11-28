import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceNowConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using ServiceNow. 
**/
export class ServiceNowConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
