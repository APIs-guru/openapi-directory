import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreatePolicyVersionResponse
/** 
 * The output of the CreatePolicyVersion operation.
**/
export class CreatePolicyVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=policyVersionId" })
  policyVersionId?: string;
}
