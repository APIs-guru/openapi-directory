import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheModeEnum } from "./cachemodeenum";
import { CacheTypeEnum } from "./cachetypeenum";



// ProjectCache
/** 
 * Information about the cache for the build project.
**/
export class ProjectCache extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=modes" })
  modes?: CacheModeEnum[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CacheTypeEnum;
}
