import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SalesforceAction
/** 
 * Describes an action to write a message to a Salesforce IoT Cloud Input Stream.
**/
export class SalesforceAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
