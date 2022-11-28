import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebhookFilterRule
/** 
 * The event criteria that specify when a webhook notification is sent to your URL.
**/
export class WebhookFilterRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jsonPath" })
  jsonPath: string;

  @SpeakeasyMetadata({ data: "json, name=matchEquals" })
  matchEquals?: string;
}
