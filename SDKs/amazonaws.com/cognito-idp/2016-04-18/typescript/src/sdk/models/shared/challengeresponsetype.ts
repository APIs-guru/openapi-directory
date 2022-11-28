import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChallengeNameEnum } from "./challengenameenum";
import { ChallengeResponseEnum } from "./challengeresponseenum";



// ChallengeResponseType
/** 
 * The challenge response type.
**/
export class ChallengeResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChallengeName" })
  challengeName?: ChallengeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=ChallengeResponse" })
  challengeResponse?: ChallengeResponseEnum;
}
