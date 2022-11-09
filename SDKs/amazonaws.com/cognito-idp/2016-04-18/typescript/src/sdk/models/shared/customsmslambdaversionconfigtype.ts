import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomSmsSenderLambdaVersionTypeEnum } from "./customsmssenderlambdaversiontypeenum";


// CustomSmsLambdaVersionConfigType
/** 
 * A custom SMS sender Lambda configuration type.
**/
export class CustomSmsLambdaVersionConfigType extends SpeakeasyBase {
  @Metadata({ data: "json, name=LambdaArn" })
  lambdaArn: string;

  @Metadata({ data: "json, name=LambdaVersion" })
  lambdaVersion: CustomSmsSenderLambdaVersionTypeEnum;
}
