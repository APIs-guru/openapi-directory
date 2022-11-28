import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreatePolicyResponse
/** 
 * The output from the CreatePolicy operation.
**/
export class CreatePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=policyVersionId" })
  policyVersionId?: string;
}
