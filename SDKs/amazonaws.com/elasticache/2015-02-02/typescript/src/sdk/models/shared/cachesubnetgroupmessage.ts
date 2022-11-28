import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSubnetGroup } from "./cachesubnetgroup";



// CacheSubnetGroupMessage
/** 
 * Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
**/
export class CacheSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheSubnetGroup })
  cacheSubnetGroups?: CacheSubnetGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
