import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { WebhookDefinition } from "./webhookdefinition";
export declare class PutWebhookInput extends SpeakeasyBase {
    tags?: Tag[];
    webhook: WebhookDefinition;
}
