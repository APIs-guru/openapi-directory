import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to get the specified user as an administrator.
**/
export declare class AdminGetUserRequest extends SpeakeasyBase {
    userPoolId: string;
    username: string;
}
