import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcSecurityGroupMembership
/** 
 * Used as a response element for queries on virtual private cloud (VPC) security group membership.
**/
export class VpcSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  vpcSecurityGroupId?: string;
}
