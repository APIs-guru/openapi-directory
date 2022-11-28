import { SpeakeasyBase } from "../../../internal/utils";
import { CacheEngineVersion } from "./cacheengineversion";
/**
 * Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
**/
export declare class CacheEngineVersionMessage extends SpeakeasyBase {
    cacheEngineVersions?: CacheEngineVersion[];
    marker?: string;
}
