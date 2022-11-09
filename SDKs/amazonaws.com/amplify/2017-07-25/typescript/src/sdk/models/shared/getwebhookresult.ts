import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Webhook } from "./webhook";


// GetWebhookResult
/** 
 *  The result structure for the get webhook request. 
**/
export class GetWebhookResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
