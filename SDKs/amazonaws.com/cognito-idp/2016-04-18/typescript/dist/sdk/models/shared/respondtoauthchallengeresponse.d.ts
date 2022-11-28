import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationResultType } from "./authenticationresulttype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";
/**
 * The response to respond to the authentication challenge.
**/
export declare class RespondToAuthChallengeResponse extends SpeakeasyBase {
    authenticationResult?: AuthenticationResultType;
    challengeName?: ChallengeNameTypeEnum;
    challengeParameters?: Map<string, string>;
    session?: string;
}
