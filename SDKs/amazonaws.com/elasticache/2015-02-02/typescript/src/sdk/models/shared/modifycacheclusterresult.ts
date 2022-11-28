import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheCluster } from "./cachecluster";



export class ModifyCacheClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheCluster?: CacheCluster;
}
