import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PolicyVersionIdentifier
/** 
 * Information about the version of the policy associated with the resource.
**/
export class PolicyVersionIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyName" })
  policyName?: string;

  @Metadata({ data: "json, name=policyVersionId" })
  policyVersionId?: string;
}
