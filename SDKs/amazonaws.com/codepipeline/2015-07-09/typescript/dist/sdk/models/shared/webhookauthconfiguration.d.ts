import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The authentication applied to incoming webhook trigger requests.
**/
export declare class WebhookAuthConfiguration extends SpeakeasyBase {
    allowedIpRange?: string;
    secretToken?: string;
}
