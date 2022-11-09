import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebhookFilterRule
/** 
 * The event criteria that specify when a webhook notification is sent to your URL.
**/
export class WebhookFilterRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=jsonPath" })
  jsonPath: string;

  @Metadata({ data: "json, name=matchEquals" })
  matchEquals?: string;
}
