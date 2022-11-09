import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetPolicyResponse
/** 
 * The output from the GetPolicy operation.
**/
export class GetPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=defaultVersionId" })
  defaultVersionId?: string;

  @Metadata({ data: "json, name=generationId" })
  generationId?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @Metadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @Metadata({ data: "json, name=policyName" })
  policyName?: string;
}
