import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheEngineVersion } from "./cacheengineversion";



// CacheEngineVersionMessage
/** 
 * Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
**/
export class CacheEngineVersionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheEngineVersion })
  cacheEngineVersions?: CacheEngineVersion[];

  @SpeakeasyMetadata()
  marker?: string;
}
