import { SpeakeasyBase } from "../../../internal/utils";
import { Allowed } from "./allowed";
import { AuthDecisionEnum } from "./authdecisionenum";
import { AuthInfo } from "./authinfo";
import { Denied } from "./denied";
/**
 * The authorizer result.
**/
export declare class AuthResult extends SpeakeasyBase {
    allowed?: Allowed;
    authDecision?: AuthDecisionEnum;
    authInfo?: AuthInfo;
    denied?: Denied;
    missingContextValues?: string[];
}
