import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyAttributeDescription } from "./policyattributedescription";



// PolicyDescription
/** 
 * Information about a policy.
**/
export class PolicyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PolicyAttributeDescription })
  policyAttributeDescriptions?: PolicyAttributeDescription[];

  @SpeakeasyMetadata()
  policyName?: string;

  @SpeakeasyMetadata()
  policyTypeName?: string;
}
