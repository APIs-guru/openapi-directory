import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EffectivePolicy
/** 
 * The policy that has the effect on the authorization results.
**/
export class EffectivePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;
}
