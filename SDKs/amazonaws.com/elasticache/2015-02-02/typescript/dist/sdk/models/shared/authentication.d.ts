import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
/**
 * Indicates whether the user requires a password to authenticate.
**/
export declare class Authentication extends SpeakeasyBase {
    passwordCount?: number;
    type?: AuthenticationTypeEnum;
}
