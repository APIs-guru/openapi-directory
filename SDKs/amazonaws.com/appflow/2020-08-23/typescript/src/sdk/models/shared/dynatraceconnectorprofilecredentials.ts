import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DynatraceConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required by Dynatrace. 
**/
export class DynatraceConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiToken" })
  apiToken: string;
}
