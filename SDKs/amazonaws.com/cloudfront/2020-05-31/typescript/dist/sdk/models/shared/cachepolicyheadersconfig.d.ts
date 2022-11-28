import { SpeakeasyBase } from "../../../internal/utils";
import { CachePolicyHeaderBehaviorEnum } from "./cachepolicyheaderbehaviorenum";
import { Headers } from "./headers";
/**
 * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
**/
export declare class CachePolicyHeadersConfig extends SpeakeasyBase {
    headerBehavior: CachePolicyHeaderBehaviorEnum;
    headers?: Headers;
}
