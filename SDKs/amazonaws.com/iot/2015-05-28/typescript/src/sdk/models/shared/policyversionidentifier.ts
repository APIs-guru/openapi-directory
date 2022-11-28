import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyVersionIdentifier
/** 
 * Information about the version of the policy associated with the resource.
**/
export class PolicyVersionIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=policyVersionId" })
  policyVersionId?: string;
}
