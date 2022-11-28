import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
import { InstanceProfile } from "./instanceprofile";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { RoleLastUsed } from "./rolelastused";
import { PolicyDetail } from "./policydetail";
import { Tag } from "./tag";
/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
export declare class RoleDetail extends SpeakeasyBase {
    arn?: string;
    assumeRolePolicyDocument?: string;
    attachedManagedPolicies?: AttachedPolicy[];
    createDate?: Date;
    instanceProfileList?: InstanceProfile[];
    path?: string;
    permissionsBoundary?: AttachedPermissionsBoundary;
    roleId?: string;
    roleLastUsed?: RoleLastUsed;
    roleName?: string;
    rolePolicyList?: PolicyDetail[];
    tags?: Tag[];
}
