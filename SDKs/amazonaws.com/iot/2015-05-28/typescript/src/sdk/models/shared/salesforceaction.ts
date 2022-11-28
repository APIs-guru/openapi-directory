import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SalesforceAction
/** 
 * Describes an action to write a message to a Salesforce IoT Cloud Input Stream.
**/
export class SalesforceAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
