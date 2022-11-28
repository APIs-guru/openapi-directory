import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheEngineVersion
/** 
 * Provides all of the details about a particular cache engine version.
**/
export class CacheEngineVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheEngineDescription?: string;

  @SpeakeasyMetadata()
  cacheEngineVersionDescription?: string;

  @SpeakeasyMetadata()
  cacheParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;
}
