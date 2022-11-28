import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSecurityGroup } from "./cachesecuritygroup";



export class RevokeCacheSecurityGroupIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheSecurityGroup?: CacheSecurityGroup;
}
