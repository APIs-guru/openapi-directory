import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { Tag } from "./tag";
import { PolicyDetail } from "./policydetail";



// UserDetail
/** 
 * <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
export class UserDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata({ elemType: AttachedPolicy })
  attachedManagedPolicies?: AttachedPolicy[];

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata()
  groupList?: string[];

  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  permissionsBoundary?: AttachedPermissionsBoundary;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  userId?: string;

  @SpeakeasyMetadata()
  userName?: string;

  @SpeakeasyMetadata({ elemType: PolicyDetail })
  userPolicyList?: PolicyDetail[];
}
