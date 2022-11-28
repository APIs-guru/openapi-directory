import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheCluster } from "./cachecluster";



export class RebootCacheClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheCluster?: CacheCluster;
}
