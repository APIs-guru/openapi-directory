import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSubnetGroup } from "./cachesubnetgroup";



export class ModifyCacheSubnetGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheSubnetGroup?: CacheSubnetGroup;
}
