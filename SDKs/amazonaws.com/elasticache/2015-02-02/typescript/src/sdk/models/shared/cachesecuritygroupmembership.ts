import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheSecurityGroupMembership
/** 
 * Represents a cluster's status within a particular cache security group.
**/
export class CacheSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheSecurityGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
