import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Webhook } from "./webhook";


// DeleteWebhookResult
/** 
 *  The result structure for the delete webhook request. 
**/
export class DeleteWebhookResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
