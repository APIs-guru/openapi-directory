import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationResultType } from "./authenticationresulttype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";


// RespondToAuthChallengeResponse
/** 
 * The response to respond to the authentication challenge.
**/
export class RespondToAuthChallengeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthenticationResult" })
  authenticationResult?: AuthenticationResultType;

  @Metadata({ data: "json, name=ChallengeName" })
  challengeName?: ChallengeNameTypeEnum;

  @Metadata({ data: "json, name=ChallengeParameters" })
  challengeParameters?: Map<string, string>;

  @Metadata({ data: "json, name=Session" })
  session?: string;
}
