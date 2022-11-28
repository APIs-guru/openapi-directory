import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of a <code>CreateCacheParameterGroup</code> operation.
**/
export declare class CacheParameterGroup extends SpeakeasyBase {
    arn?: string;
    cacheParameterGroupFamily?: string;
    cacheParameterGroupName?: string;
    description?: string;
    isGlobal?: boolean;
}
