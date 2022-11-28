import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookFilterTypeEnum } from "./webhookfiltertypeenum";



// WebhookFilter
/** 
 *  A filter used to determine which webhooks trigger a build. 
**/
export class WebhookFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludeMatchedPattern" })
  excludeMatchedPattern?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: WebhookFilterTypeEnum;
}
