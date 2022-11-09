import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SingularConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required when using Singular. 
**/
export class SingularConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey: string;
}
