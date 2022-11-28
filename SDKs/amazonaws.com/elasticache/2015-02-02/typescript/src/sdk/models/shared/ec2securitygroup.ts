import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ec2SecurityGroup
/** 
 * Provides ownership and status information for an Amazon EC2 security group.
**/
export class Ec2SecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ec2SecurityGroupName?: string;

  @SpeakeasyMetadata()
  ec2SecurityGroupOwnerId?: string;

  @SpeakeasyMetadata()
  status?: string;
}
