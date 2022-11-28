import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";



// GetWebhookResult
/** 
 *  The result structure for the get webhook request. 
**/
export class GetWebhookResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
