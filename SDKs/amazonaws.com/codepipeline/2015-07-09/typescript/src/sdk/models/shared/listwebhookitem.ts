import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebhookDefinition } from "./webhookdefinition";
import { Tag } from "./tag";


// ListWebhookItem
/** 
 * The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.
**/
export class ListWebhookItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=definition" })
  definition: WebhookDefinition;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=lastTriggered" })
  lastTriggered?: Date;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=url" })
  url: string;
}
