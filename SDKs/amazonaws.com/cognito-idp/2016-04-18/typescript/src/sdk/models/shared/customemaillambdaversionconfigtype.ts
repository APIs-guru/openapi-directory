import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomEmailSenderLambdaVersionTypeEnum } from "./customemailsenderlambdaversiontypeenum";


// CustomEmailLambdaVersionConfigType
/** 
 * A custom email sender Lambda configuration type.
**/
export class CustomEmailLambdaVersionConfigType extends SpeakeasyBase {
  @Metadata({ data: "json, name=LambdaArn" })
  lambdaArn: string;

  @Metadata({ data: "json, name=LambdaVersion" })
  lambdaVersion: CustomEmailSenderLambdaVersionTypeEnum;
}
