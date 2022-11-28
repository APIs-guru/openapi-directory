import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SalesforceConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Salesforce. 
**/
export class SalesforceConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUrl" })
  instanceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=isSandboxEnvironment" })
  isSandboxEnvironment?: boolean;
}
