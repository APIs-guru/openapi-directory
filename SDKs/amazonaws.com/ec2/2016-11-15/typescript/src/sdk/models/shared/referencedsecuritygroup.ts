import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReferencedSecurityGroup
/** 
 *  Describes the security group that is referenced in the security group rule.
**/
export class ReferencedSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  peeringStatus?: string;

  @SpeakeasyMetadata()
  userId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;

  @SpeakeasyMetadata()
  vpcPeeringConnectionId?: string;
}
