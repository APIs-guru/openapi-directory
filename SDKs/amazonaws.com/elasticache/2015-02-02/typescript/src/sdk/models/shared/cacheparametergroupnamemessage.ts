import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheParameterGroupNameMessage
/** 
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>ModifyCacheParameterGroup</code> </p> </li> <li> <p> <code>ResetCacheParameterGroup</code> </p> </li> </ul>
**/
export class CacheParameterGroupNameMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheParameterGroupName?: string;
}
