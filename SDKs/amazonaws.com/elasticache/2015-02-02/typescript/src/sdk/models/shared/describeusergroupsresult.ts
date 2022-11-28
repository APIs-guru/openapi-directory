import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserGroup } from "./usergroup";



export class DescribeUserGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: UserGroup })
  userGroups?: UserGroup[];
}
