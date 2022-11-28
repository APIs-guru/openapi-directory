import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupIdentifier
/** 
 * Describes a security group.
**/
export class GroupIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  groupName?: string;
}
