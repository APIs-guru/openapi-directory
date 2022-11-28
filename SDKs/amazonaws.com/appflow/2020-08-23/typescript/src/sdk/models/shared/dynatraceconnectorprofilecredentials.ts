import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DynatraceConnectorProfileCredentials
/** 
 *  The connector-specific profile credentials required by Dynatrace. 
**/
export class DynatraceConnectorProfileCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiToken" })
  apiToken: string;
}
