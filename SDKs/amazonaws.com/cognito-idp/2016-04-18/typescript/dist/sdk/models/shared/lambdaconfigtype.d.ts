import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEmailLambdaVersionConfigType } from "./customemaillambdaversionconfigtype";
import { CustomSmsLambdaVersionConfigType } from "./customsmslambdaversionconfigtype";
/**
 * Specifies the configuration for Lambda triggers.
**/
export declare class LambdaConfigType extends SpeakeasyBase {
    createAuthChallenge?: string;
    customEmailSender?: CustomEmailLambdaVersionConfigType;
    customMessage?: string;
    customSmsSender?: CustomSmsLambdaVersionConfigType;
    defineAuthChallenge?: string;
    kmsKeyId?: string;
    postAuthentication?: string;
    postConfirmation?: string;
    preAuthentication?: string;
    preSignUp?: string;
    preTokenGeneration?: string;
    userMigration?: string;
    verifyAuthChallengeResponse?: string;
}
