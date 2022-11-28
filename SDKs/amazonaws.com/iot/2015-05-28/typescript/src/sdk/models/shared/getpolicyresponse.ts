import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPolicyResponse
/** 
 * The output from the GetPolicy operation.
**/
export class GetPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultVersionId" })
  defaultVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=generationId" })
  generationId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=policyArn" })
  policyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;
}
