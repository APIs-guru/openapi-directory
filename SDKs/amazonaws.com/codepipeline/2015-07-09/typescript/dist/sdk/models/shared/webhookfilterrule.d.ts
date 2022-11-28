import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The event criteria that specify when a webhook notification is sent to your URL.
**/
export declare class WebhookFilterRule extends SpeakeasyBase {
    jsonPath: string;
    matchEquals?: string;
}
