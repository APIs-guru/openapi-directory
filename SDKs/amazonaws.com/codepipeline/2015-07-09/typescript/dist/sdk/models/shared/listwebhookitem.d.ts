import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookDefinition } from "./webhookdefinition";
import { Tag } from "./tag";
/**
 * The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.
**/
export declare class ListWebhookItem extends SpeakeasyBase {
    arn?: string;
    definition: WebhookDefinition;
    errorCode?: string;
    errorMessage?: string;
    lastTriggered?: Date;
    tags?: Tag[];
    url: string;
}
