import { SpeakeasyBase } from "../../../internal/utils";
import { UserGroupPendingChanges } from "./usergrouppendingchanges";
export declare class UserGroup extends SpeakeasyBase {
    arn?: string;
    engine?: string;
    pendingChanges?: UserGroupPendingChanges;
    replicationGroups?: string[];
    status?: string;
    userGroupId?: string;
    userIds?: string[];
}
