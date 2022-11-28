import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheCluster } from "./cachecluster";



// CacheClusterMessage
/** 
 * Represents the output of a <code>DescribeCacheClusters</code> operation.
**/
export class CacheClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheCluster })
  cacheClusters?: CacheCluster[];

  @SpeakeasyMetadata()
  marker?: string;
}
