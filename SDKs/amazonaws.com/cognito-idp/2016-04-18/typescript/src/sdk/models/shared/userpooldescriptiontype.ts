import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaConfigType } from "./lambdaconfigtype";
import { StatusTypeEnum } from "./statustypeenum";


// UserPoolDescriptionType
/** 
 * A user pool description.
**/
export class UserPoolDescriptionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LambdaConfig" })
  lambdaConfig?: LambdaConfigType;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusTypeEnum;
}
