import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
import { InstanceProfile } from "./instanceprofile";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { RoleLastUsed } from "./rolelastused";
import { PolicyDetail } from "./policydetail";
import { Tag } from "./tag";



// RoleDetail
/** 
 * <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
export class RoleDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  assumeRolePolicyDocument?: string;

  @SpeakeasyMetadata({ elemType: AttachedPolicy })
  attachedManagedPolicies?: AttachedPolicy[];

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata({ elemType: InstanceProfile })
  instanceProfileList?: InstanceProfile[];

  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  permissionsBoundary?: AttachedPermissionsBoundary;

  @SpeakeasyMetadata()
  roleId?: string;

  @SpeakeasyMetadata()
  roleLastUsed?: RoleLastUsed;

  @SpeakeasyMetadata()
  roleName?: string;

  @SpeakeasyMetadata({ elemType: PolicyDetail })
  rolePolicyList?: PolicyDetail[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
