import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { RoleLastUsed } from "./rolelastused";
import { Tag } from "./tag";
/**
 * Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
**/
export declare class Role extends SpeakeasyBase {
    arn: string;
    assumeRolePolicyDocument?: string;
    createDate: Date;
    description?: string;
    maxSessionDuration?: number;
    path: string;
    permissionsBoundary?: AttachedPermissionsBoundary;
    roleId: string;
    roleLastUsed?: RoleLastUsed;
    roleName: string;
    tags?: Tag[];
}
