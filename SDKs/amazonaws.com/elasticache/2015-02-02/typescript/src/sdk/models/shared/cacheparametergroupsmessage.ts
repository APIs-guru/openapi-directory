import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheParameterGroup } from "./cacheparametergroup";



// CacheParameterGroupsMessage
/** 
 * Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
**/
export class CacheParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheParameterGroup })
  cacheParameterGroups?: CacheParameterGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
