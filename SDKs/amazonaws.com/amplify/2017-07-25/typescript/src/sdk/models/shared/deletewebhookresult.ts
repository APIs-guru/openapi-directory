import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";



// DeleteWebhookResult
/** 
 *  The result structure for the delete webhook request. 
**/
export class DeleteWebhookResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
