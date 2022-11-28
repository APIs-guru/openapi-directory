import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationResultType } from "./authenticationresulttype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";
/**
 * Initiates the authentication response.
**/
export declare class InitiateAuthResponse extends SpeakeasyBase {
    authenticationResult?: AuthenticationResultType;
    challengeName?: ChallengeNameTypeEnum;
    challengeParameters?: Map<string, string>;
    session?: string;
}
