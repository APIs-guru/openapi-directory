import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
/**
 * Describes a user in the user pool and the associated stack.
**/
export declare class UserStackAssociation extends SpeakeasyBase {
    authenticationType: AuthenticationTypeEnum;
    sendEmailNotification?: boolean;
    stackName: string;
    userName: string;
}
