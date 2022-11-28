import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserGroupsUpdateStatus
/** 
 * The status of the user group update.
**/
export class UserGroupsUpdateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  userGroupIdsToAdd?: string[];

  @SpeakeasyMetadata()
  userGroupIdsToRemove?: string[];
}
