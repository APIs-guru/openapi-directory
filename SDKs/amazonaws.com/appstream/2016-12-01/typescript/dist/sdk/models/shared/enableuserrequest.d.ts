import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
export declare class EnableUserRequest extends SpeakeasyBase {
    authenticationType: AuthenticationTypeEnum;
    userName: string;
}
