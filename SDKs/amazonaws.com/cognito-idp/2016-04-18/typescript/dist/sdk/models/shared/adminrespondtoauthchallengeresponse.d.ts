import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationResultType } from "./authenticationresulttype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";
/**
 * Responds to the authentication challenge, as an administrator.
**/
export declare class AdminRespondToAuthChallengeResponse extends SpeakeasyBase {
    authenticationResult?: AuthenticationResultType;
    challengeName?: ChallengeNameTypeEnum;
    challengeParameters?: Map<string, string>;
    session?: string;
}
