import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DynatraceConnectorProfileProperties
/** 
 *  The connector-specific profile properties required by Dynatrace. 
**/
export class DynatraceConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
