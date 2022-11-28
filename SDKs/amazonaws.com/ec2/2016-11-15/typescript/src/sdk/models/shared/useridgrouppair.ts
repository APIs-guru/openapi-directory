import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserIdGroupPair
/** 
 * Describes a security group and Amazon Web Services account ID pair.
**/
export class UserIdGroupPair extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  groupName?: string;

  @SpeakeasyMetadata()
  peeringStatus?: string;

  @SpeakeasyMetadata()
  userId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;

  @SpeakeasyMetadata()
  vpcPeeringConnectionId?: string;
}
