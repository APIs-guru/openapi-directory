import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CacheModeEnum } from "./cachemodeenum";
import { CacheTypeEnum } from "./cachetypeenum";


// ProjectCache
/** 
 * Information about the cache for the build project.
**/
export class ProjectCache extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=modes" })
  modes?: CacheModeEnum[];

  @Metadata({ data: "json, name=type" })
  type: CacheTypeEnum;
}
