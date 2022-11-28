import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
export declare class DisableUserRequest extends SpeakeasyBase {
    authenticationType: AuthenticationTypeEnum;
    userName: string;
}
