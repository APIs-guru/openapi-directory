import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DynatraceConnectorProfileProperties
/** 
 *  The connector-specific profile properties required by Dynatrace. 
**/
export class DynatraceConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
