import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Webhook } from "./webhook";


// UpdateWebhookResult
/** 
 *  The result structure for the update webhook request. 
**/
export class UpdateWebhookResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
