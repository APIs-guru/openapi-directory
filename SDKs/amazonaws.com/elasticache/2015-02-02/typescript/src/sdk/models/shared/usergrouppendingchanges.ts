import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserGroupPendingChanges
/** 
 * Returns the updates being applied to the user group.
**/
export class UserGroupPendingChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  userIdsToAdd?: string[];

  @SpeakeasyMetadata()
  userIdsToRemove?: string[];
}
