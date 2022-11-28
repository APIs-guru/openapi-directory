import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSubnetGroup } from "./cachesubnetgroup";



export class CreateCacheSubnetGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheSubnetGroup?: CacheSubnetGroup;
}
