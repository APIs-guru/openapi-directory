import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserGroupPendingChanges } from "./usergrouppendingchanges";



export class UserGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  pendingChanges?: UserGroupPendingChanges;

  @SpeakeasyMetadata()
  replicationGroups?: string[];

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  userGroupId?: string;

  @SpeakeasyMetadata()
  userIds?: string[];
}
