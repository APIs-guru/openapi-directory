import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChallengeNameEnum } from "./challengenameenum";
import { ChallengeResponseEnum } from "./challengeresponseenum";


// ChallengeResponseType
/** 
 * The challenge response type.
**/
export class ChallengeResponseType extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChallengeName" })
  challengeName?: ChallengeNameEnum;

  @Metadata({ data: "json, name=ChallengeResponse" })
  challengeResponse?: ChallengeResponseEnum;
}
