import { SpeakeasyBase } from "../../../internal/utils";
import { CacheModeEnum } from "./cachemodeenum";
import { CacheTypeEnum } from "./cachetypeenum";
/**
 * Information about the cache for the build project.
**/
export declare class ProjectCache extends SpeakeasyBase {
    location?: string;
    modes?: CacheModeEnum[];
    type: CacheTypeEnum;
}
