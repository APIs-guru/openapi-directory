import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomEmailSenderLambdaVersionTypeEnum } from "./customemailsenderlambdaversiontypeenum";



// CustomEmailLambdaVersionConfigType
/** 
 * A custom email sender Lambda configuration type.
**/
export class CustomEmailLambdaVersionConfigType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LambdaArn" })
  lambdaArn: string;

  @SpeakeasyMetadata({ data: "json, name=LambdaVersion" })
  lambdaVersion: CustomEmailSenderLambdaVersionTypeEnum;
}
