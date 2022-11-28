import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheParameterGroup } from "./cacheparametergroup";



export class CreateCacheParameterGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheParameterGroup?: CacheParameterGroup;
}
