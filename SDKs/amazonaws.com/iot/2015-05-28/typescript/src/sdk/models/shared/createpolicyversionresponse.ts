import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreatePolicyVersionResponse
/** 
 * The output of the CreatePolicyVersion operation.
**/
export class CreatePolicyVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @Metadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @Metadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @Metadata({ data: "json, name=policyVersionId" })
  policyVersionId?: string;
}
