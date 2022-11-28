import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaConfigType } from "./lambdaconfigtype";
import { StatusTypeEnum } from "./statustypeenum";



// UserPoolDescriptionType
/** 
 * A user pool description.
**/
export class UserPoolDescriptionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LambdaConfig" })
  lambdaConfig?: LambdaConfigType;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusTypeEnum;
}
