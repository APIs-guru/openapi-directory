import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEmailSenderLambdaVersionTypeEnum } from "./customemailsenderlambdaversiontypeenum";
/**
 * A custom email sender Lambda configuration type.
**/
export declare class CustomEmailLambdaVersionConfigType extends SpeakeasyBase {
    lambdaArn: string;
    lambdaVersion: CustomEmailSenderLambdaVersionTypeEnum;
}
