import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomSmsSenderLambdaVersionTypeEnum } from "./customsmssenderlambdaversiontypeenum";



// CustomSmsLambdaVersionConfigType
/** 
 * A custom SMS sender Lambda configuration type.
**/
export class CustomSmsLambdaVersionConfigType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LambdaArn" })
  lambdaArn: string;

  @SpeakeasyMetadata({ data: "json, name=LambdaVersion" })
  lambdaVersion: CustomSmsSenderLambdaVersionTypeEnum;
}
