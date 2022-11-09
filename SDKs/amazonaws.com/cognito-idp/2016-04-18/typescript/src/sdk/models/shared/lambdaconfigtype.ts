import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomEmailLambdaVersionConfigType } from "./customemaillambdaversionconfigtype";
import { CustomSmsLambdaVersionConfigType } from "./customsmslambdaversionconfigtype";


// LambdaConfigType
/** 
 * Specifies the configuration for Lambda triggers.
**/
export class LambdaConfigType extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateAuthChallenge" })
  createAuthChallenge?: string;

  @Metadata({ data: "json, name=CustomEmailSender" })
  customEmailSender?: CustomEmailLambdaVersionConfigType;

  @Metadata({ data: "json, name=CustomMessage" })
  customMessage?: string;

  @Metadata({ data: "json, name=CustomSMSSender" })
  customSmsSender?: CustomSmsLambdaVersionConfigType;

  @Metadata({ data: "json, name=DefineAuthChallenge" })
  defineAuthChallenge?: string;

  @Metadata({ data: "json, name=KMSKeyID" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=PostAuthentication" })
  postAuthentication?: string;

  @Metadata({ data: "json, name=PostConfirmation" })
  postConfirmation?: string;

  @Metadata({ data: "json, name=PreAuthentication" })
  preAuthentication?: string;

  @Metadata({ data: "json, name=PreSignUp" })
  preSignUp?: string;

  @Metadata({ data: "json, name=PreTokenGeneration" })
  preTokenGeneration?: string;

  @Metadata({ data: "json, name=UserMigration" })
  userMigration?: string;

  @Metadata({ data: "json, name=VerifyAuthChallengeResponse" })
  verifyAuthChallengeResponse?: string;
}
