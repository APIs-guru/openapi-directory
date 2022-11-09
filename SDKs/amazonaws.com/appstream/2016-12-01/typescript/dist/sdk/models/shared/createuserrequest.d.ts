import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { MessageActionEnum } from "./messageactionenum";
export declare class CreateUserRequest extends SpeakeasyBase {
    authenticationType: AuthenticationTypeEnum;
    firstName?: string;
    lastName?: string;
    messageAction?: MessageActionEnum;
    userName: string;
}
