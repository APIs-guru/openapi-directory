import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSecurityGroup } from "./cachesecuritygroup";



export class CreateCacheSecurityGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheSecurityGroup?: CacheSecurityGroup;
}
