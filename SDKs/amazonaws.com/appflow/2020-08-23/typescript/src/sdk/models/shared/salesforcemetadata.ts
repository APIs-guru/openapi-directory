import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SalesforceMetadata
/** 
 *  The connector metadata specific to Salesforce. 
**/
export class SalesforceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
