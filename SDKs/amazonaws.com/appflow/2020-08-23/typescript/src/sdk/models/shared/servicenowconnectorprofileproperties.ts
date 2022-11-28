import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceNowConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using ServiceNow. 
**/
export class ServiceNowConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
