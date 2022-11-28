import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
export declare class EnableUserRequest extends SpeakeasyBase {
    authenticationType: AuthenticationTypeEnum;
    userName: string;
}
