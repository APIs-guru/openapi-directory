import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatadogConnectorProfileProperties
/** 
 *  The connector-specific profile properties required by Datadog. 
**/
export class DatadogConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
