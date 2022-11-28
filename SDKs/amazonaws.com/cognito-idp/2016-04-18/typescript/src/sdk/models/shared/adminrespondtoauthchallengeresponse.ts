import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationResultType } from "./authenticationresulttype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";



// AdminRespondToAuthChallengeResponse
/** 
 * Responds to the authentication challenge, as an administrator.
**/
export class AdminRespondToAuthChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthenticationResult" })
  authenticationResult?: AuthenticationResultType;

  @SpeakeasyMetadata({ data: "json, name=ChallengeName" })
  challengeName?: ChallengeNameTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ChallengeParameters" })
  challengeParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Session" })
  session?: string;
}
