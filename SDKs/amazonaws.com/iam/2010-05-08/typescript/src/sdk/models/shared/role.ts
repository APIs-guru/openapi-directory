import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { RoleLastUsed } from "./rolelastused";
import { Tag } from "./tag";



// Role
/** 
 * Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
**/
export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  assumeRolePolicyDocument?: string;

  @SpeakeasyMetadata()
  createDate: Date;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  maxSessionDuration?: number;

  @SpeakeasyMetadata()
  path: string;

  @SpeakeasyMetadata()
  permissionsBoundary?: AttachedPermissionsBoundary;

  @SpeakeasyMetadata()
  roleId: string;

  @SpeakeasyMetadata()
  roleLastUsed?: RoleLastUsed;

  @SpeakeasyMetadata()
  roleName: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
