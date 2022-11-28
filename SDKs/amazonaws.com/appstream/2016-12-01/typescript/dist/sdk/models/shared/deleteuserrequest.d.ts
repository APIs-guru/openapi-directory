import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
export declare class DeleteUserRequest extends SpeakeasyBase {
    authenticationType: AuthenticationTypeEnum;
    userName: string;
}
