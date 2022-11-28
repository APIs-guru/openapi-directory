import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterOnPremisesInstanceInput
/** 
 * Represents the input of the register on-premises instance operation.
**/
export class RegisterOnPremisesInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iamSessionArn" })
  iamSessionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=iamUserArn" })
  iamUserArn?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
