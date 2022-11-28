import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookDefinition } from "./webhookdefinition";
import { Tag } from "./tag";



// ListWebhookItem
/** 
 * The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.
**/
export class ListWebhookItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition: WebhookDefinition;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=lastTriggered" })
  lastTriggered?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
