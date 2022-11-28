import { SpeakeasyBase } from "../../../internal/utils";
import { ListWebhookItem } from "./listwebhookitem";
export declare class ListWebhooksOutput extends SpeakeasyBase {
    nextToken?: string;
    webhooks?: ListWebhookItem[];
}
