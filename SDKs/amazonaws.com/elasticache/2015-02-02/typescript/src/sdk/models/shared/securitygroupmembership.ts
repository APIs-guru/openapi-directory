import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityGroupMembership
/** 
 * Represents a single cache security group and its status.
**/
export class SecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  securityGroupId?: string;

  @SpeakeasyMetadata()
  status?: string;
}
