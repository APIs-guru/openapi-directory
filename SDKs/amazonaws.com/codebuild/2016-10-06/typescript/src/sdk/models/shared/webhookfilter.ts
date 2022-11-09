import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebhookFilterTypeEnum } from "./webhookfiltertypeenum";


// WebhookFilter
/** 
 *  A filter used to determine which webhooks trigger a build. 
**/
export class WebhookFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludeMatchedPattern" })
  excludeMatchedPattern?: boolean;

  @Metadata({ data: "json, name=pattern" })
  pattern: string;

  @Metadata({ data: "json, name=type" })
  type: WebhookFilterTypeEnum;
}
