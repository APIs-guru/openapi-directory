import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterOnPremisesInstanceInput
/** 
 * Represents the input of the register on-premises instance operation.
**/
export class RegisterOnPremisesInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=iamSessionArn" })
  iamSessionArn?: string;

  @Metadata({ data: "json, name=iamUserArn" })
  iamUserArn?: string;

  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
