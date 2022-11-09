import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Webhook } from "./webhook";


// CreateWebhookResult
/** 
 *  The result structure for the create webhook request. 
**/
export class CreateWebhookResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
