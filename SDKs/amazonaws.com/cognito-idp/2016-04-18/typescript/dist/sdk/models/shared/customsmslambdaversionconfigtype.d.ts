import { SpeakeasyBase } from "../../../internal/utils";
import { CustomSmsSenderLambdaVersionTypeEnum } from "./customsmssenderlambdaversiontypeenum";
/**
 * A custom SMS sender Lambda configuration type.
**/
export declare class CustomSmsLambdaVersionConfigType extends SpeakeasyBase {
    lambdaArn: string;
    lambdaVersion: CustomSmsSenderLambdaVersionTypeEnum;
}
