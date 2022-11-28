import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationResultType } from "./authenticationresulttype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";
/**
 * Initiates the authentication response, as an administrator.
**/
export declare class AdminInitiateAuthResponse extends SpeakeasyBase {
    authenticationResult?: AuthenticationResultType;
    challengeName?: ChallengeNameTypeEnum;
    challengeParameters?: Map<string, string>;
    session?: string;
}
