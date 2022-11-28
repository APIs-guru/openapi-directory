import { SpeakeasyBase } from "../../../internal/utils";
import { CachePolicyQueryStringBehaviorEnum } from "./cachepolicyquerystringbehaviorenum";
import { QueryStringNames } from "./querystringnames";
/**
 * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
**/
export declare class CachePolicyQueryStringsConfig extends SpeakeasyBase {
    queryStringBehavior: CachePolicyQueryStringBehaviorEnum;
    queryStrings?: QueryStringNames;
}
