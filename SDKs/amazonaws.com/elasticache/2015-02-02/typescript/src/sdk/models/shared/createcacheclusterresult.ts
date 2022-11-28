import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheCluster } from "./cachecluster";



export class CreateCacheClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheCluster?: CacheCluster;
}
