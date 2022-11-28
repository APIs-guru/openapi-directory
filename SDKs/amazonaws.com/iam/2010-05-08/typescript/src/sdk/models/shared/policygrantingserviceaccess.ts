import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyOwnerEntityTypeEnum } from "./policyownerentitytypeenum";
import { PolicyTypeEnum } from "./policytypeenum";



// PolicyGrantingServiceAccess
/** 
 * <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
**/
export class PolicyGrantingServiceAccess extends SpeakeasyBase {
  @SpeakeasyMetadata()
  entityName?: string;

  @SpeakeasyMetadata()
  entityType?: PolicyOwnerEntityTypeEnum;

  @SpeakeasyMetadata()
  policyArn?: string;

  @SpeakeasyMetadata()
  policyName: string;

  @SpeakeasyMetadata()
  policyType: PolicyTypeEnum;
}
