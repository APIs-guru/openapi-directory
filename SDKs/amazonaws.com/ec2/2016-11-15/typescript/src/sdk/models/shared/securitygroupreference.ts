import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityGroupReference
/** 
 * Describes a VPC with a security group that references your security group.
**/
export class SecurityGroupReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  referencingVpcId?: string;

  @SpeakeasyMetadata()
  vpcPeeringConnectionId?: string;
}
