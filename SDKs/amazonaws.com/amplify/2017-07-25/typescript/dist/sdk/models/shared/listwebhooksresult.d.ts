import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
/**
 *  The result structure for the list webhooks request.
**/
export declare class ListWebhooksResult extends SpeakeasyBase {
    nextToken?: string;
    webhooks: Webhook[];
}
