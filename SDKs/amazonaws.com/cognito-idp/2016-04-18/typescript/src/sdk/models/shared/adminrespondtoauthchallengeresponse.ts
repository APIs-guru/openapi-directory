import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationResultType } from "./authenticationresulttype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";


// AdminRespondToAuthChallengeResponse
/** 
 * Responds to the authentication challenge, as an administrator.
**/
export class AdminRespondToAuthChallengeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationResult" })
  authenticationResult?: AuthenticationResultType;

  @Metadata({ data: "json, name=ChallengeName" })
  challengeName?: ChallengeNameTypeEnum;

  @Metadata({ data: "json, name=ChallengeParameters" })
  challengeParameters?: Map<string, string>;

  @Metadata({ data: "json, name=Session" })
  session?: string;
}
