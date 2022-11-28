import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheParameterGroupStatus
/** 
 * Status of the cache parameter group.
**/
export class CacheParameterGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheNodeIdsToReboot?: string[];

  @SpeakeasyMetadata()
  cacheParameterGroupName?: string;

  @SpeakeasyMetadata()
  parameterApplyStatus?: string;
}
