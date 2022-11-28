import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityGroupIdentifier
/** 
 * Describes a security group.
**/
export class SecurityGroupIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  groupName?: string;
}
