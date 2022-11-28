import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomEmailLambdaVersionConfigType } from "./customemaillambdaversionconfigtype";
import { CustomSmsLambdaVersionConfigType } from "./customsmslambdaversionconfigtype";



// LambdaConfigType
/** 
 * Specifies the configuration for Lambda triggers.
**/
export class LambdaConfigType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateAuthChallenge" })
  createAuthChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomEmailSender" })
  customEmailSender?: CustomEmailLambdaVersionConfigType;

  @SpeakeasyMetadata({ data: "json, name=CustomMessage" })
  customMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomSMSSender" })
  customSmsSender?: CustomSmsLambdaVersionConfigType;

  @SpeakeasyMetadata({ data: "json, name=DefineAuthChallenge" })
  defineAuthChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=KMSKeyID" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PostAuthentication" })
  postAuthentication?: string;

  @SpeakeasyMetadata({ data: "json, name=PostConfirmation" })
  postConfirmation?: string;

  @SpeakeasyMetadata({ data: "json, name=PreAuthentication" })
  preAuthentication?: string;

  @SpeakeasyMetadata({ data: "json, name=PreSignUp" })
  preSignUp?: string;

  @SpeakeasyMetadata({ data: "json, name=PreTokenGeneration" })
  preTokenGeneration?: string;

  @SpeakeasyMetadata({ data: "json, name=UserMigration" })
  userMigration?: string;

  @SpeakeasyMetadata({ data: "json, name=VerifyAuthChallengeResponse" })
  verifyAuthChallengeResponse?: string;
}
