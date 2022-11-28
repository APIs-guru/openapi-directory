import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheParameterGroup
/** 
 * Represents the output of a <code>CreateCacheParameterGroup</code> operation.
**/
export class CacheParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  cacheParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  cacheParameterGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  isGlobal?: boolean;
}
