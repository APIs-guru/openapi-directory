import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SalesforceMetadata
/** 
 *  The connector metadata specific to Salesforce. 
**/
export class SalesforceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
