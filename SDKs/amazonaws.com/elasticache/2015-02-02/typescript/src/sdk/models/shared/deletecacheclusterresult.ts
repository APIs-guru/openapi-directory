import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheCluster } from "./cachecluster";



export class DeleteCacheClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheCluster?: CacheCluster;
}
