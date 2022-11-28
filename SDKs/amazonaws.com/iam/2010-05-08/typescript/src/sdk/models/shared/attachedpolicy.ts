import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachedPolicy
/** 
 * <p>Contains information about an attached policy.</p> <p>An attached policy is a managed policy that has been attached to a user, group, or role. This data type is used as a response element in the <a>ListAttachedGroupPolicies</a>, <a>ListAttachedRolePolicies</a>, <a>ListAttachedUserPolicies</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
**/
export class AttachedPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policyArn?: string;

  @SpeakeasyMetadata()
  policyName?: string;
}
