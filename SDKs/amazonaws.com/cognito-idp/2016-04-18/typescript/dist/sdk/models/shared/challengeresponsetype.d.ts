import { SpeakeasyBase } from "../../../internal/utils";
import { ChallengeNameEnum } from "./challengenameenum";
import { ChallengeResponseEnum } from "./challengeresponseenum";
/**
 * The challenge response type.
**/
export declare class ChallengeResponseType extends SpeakeasyBase {
    challengeName?: ChallengeNameEnum;
    challengeResponse?: ChallengeResponseEnum;
}
