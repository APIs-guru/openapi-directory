import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";



// UpdateWebhookResult
/** 
 *  The result structure for the update webhook request. 
**/
export class UpdateWebhookResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
