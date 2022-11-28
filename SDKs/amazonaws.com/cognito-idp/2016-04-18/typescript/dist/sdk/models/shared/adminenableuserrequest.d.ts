import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request that enables the user as an administrator.
**/
export declare class AdminEnableUserRequest extends SpeakeasyBase {
    userPoolId: string;
    username: string;
}
