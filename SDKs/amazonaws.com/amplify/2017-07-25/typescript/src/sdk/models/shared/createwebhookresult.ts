import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";



// CreateWebhookResult
/** 
 *  The result structure for the create webhook request. 
**/
export class CreateWebhookResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
