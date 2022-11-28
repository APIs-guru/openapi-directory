import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSecurityGroup } from "./cachesecuritygroup";



export class AuthorizeCacheSecurityGroupIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheSecurityGroup?: CacheSecurityGroup;
}
