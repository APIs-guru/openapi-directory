import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceNowConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using ServiceNow. 
**/
export class ServiceNowConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
