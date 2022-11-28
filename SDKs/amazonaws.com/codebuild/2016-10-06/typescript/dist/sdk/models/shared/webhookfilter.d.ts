import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookFilterTypeEnum } from "./webhookfiltertypeenum";
/**
 *  A filter used to determine which webhooks trigger a build.
**/
export declare class WebhookFilter extends SpeakeasyBase {
    excludeMatchedPattern?: boolean;
    pattern: string;
    type: WebhookFilterTypeEnum;
}
