import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { Tag } from "./tag";
import { PolicyDetail } from "./policydetail";
/**
 * <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
export declare class UserDetail extends SpeakeasyBase {
    arn?: string;
    attachedManagedPolicies?: AttachedPolicy[];
    createDate?: Date;
    groupList?: string[];
    path?: string;
    permissionsBoundary?: AttachedPermissionsBoundary;
    tags?: Tag[];
    userId?: string;
    userName?: string;
    userPolicyList?: PolicyDetail[];
}
