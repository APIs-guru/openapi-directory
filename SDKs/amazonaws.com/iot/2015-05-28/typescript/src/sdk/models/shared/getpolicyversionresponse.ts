import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPolicyVersionResponse
/** 
 * The output from the GetPolicyVersion operation.
**/
export class GetPolicyVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=generationId" })
  generationId?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefaultVersion" })
  isDefaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=policyVersionId" })
  policyVersionId?: string;
}
