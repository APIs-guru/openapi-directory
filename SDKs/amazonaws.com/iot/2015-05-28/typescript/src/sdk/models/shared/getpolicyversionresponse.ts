import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetPolicyVersionResponse
/** 
 * The output from the GetPolicyVersion operation.
**/
export class GetPolicyVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=generationId" })
  generationId?: string;

  @Metadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @Metadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @Metadata({ data: "json, name=policyName" })
  policyName?: string;

  @Metadata({ data: "json, name=policyVersionId" })
  policyVersionId?: string;
}
