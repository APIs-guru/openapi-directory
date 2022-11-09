import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EffectivePolicy
/** 
 * The policy that has the effect on the authorization results.
**/
export class EffectivePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @Metadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @Metadata({ data: "json, name=policyName" })
  policyName?: string;
}
