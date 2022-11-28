import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SingularConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Singular. 
**/
export class SingularConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey: string;
}
