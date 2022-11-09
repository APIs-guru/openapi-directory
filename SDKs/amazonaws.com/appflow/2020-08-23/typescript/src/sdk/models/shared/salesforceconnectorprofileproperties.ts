import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SalesforceConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Salesforce. 
**/
export class SalesforceConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUrl" })
  instanceUrl?: string;

  @Metadata({ data: "json, name=isSandboxEnvironment" })
  isSandboxEnvironment?: boolean;
}
