import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreatePolicyResponse
/** 
 * The output from the CreatePolicy operation.
**/
export class CreatePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @Metadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @Metadata({ data: "json, name=policyName" })
  policyName?: string;

  @Metadata({ data: "json, name=policyVersionId" })
  policyVersionId?: string;
}
