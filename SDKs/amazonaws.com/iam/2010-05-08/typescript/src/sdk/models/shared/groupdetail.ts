import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
import { PolicyDetail } from "./policydetail";



// GroupDetail
/** 
 * <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
export class GroupDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata({ elemType: AttachedPolicy })
  attachedManagedPolicies?: AttachedPolicy[];

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata()
  groupName?: string;

  @SpeakeasyMetadata({ elemType: PolicyDetail })
  groupPolicyList?: PolicyDetail[];

  @SpeakeasyMetadata()
  path?: string;
}
