import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatadogConnectorProfileProperties
/** 
 *  The connector-specific profile properties required by Datadog. 
**/
export class DatadogConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
