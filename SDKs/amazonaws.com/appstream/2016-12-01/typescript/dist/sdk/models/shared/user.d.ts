import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
/**
 * Describes a user in the user pool.
**/
export declare class User extends SpeakeasyBase {
    arn?: string;
    authenticationType: AuthenticationTypeEnum;
    createdTime?: Date;
    enabled?: boolean;
    firstName?: string;
    lastName?: string;
    status?: string;
    userName?: string;
}
