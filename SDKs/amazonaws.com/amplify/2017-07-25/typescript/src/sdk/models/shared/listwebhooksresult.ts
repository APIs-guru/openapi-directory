import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";



// ListWebhooksResult
/** 
 *  The result structure for the list webhooks request. 
**/
export class ListWebhooksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: Webhook })
  webhooks: Webhook[];
}
