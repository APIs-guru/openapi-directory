import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to disable the user as an administrator.
**/
export declare class AdminDisableUserRequest extends SpeakeasyBase {
    userPoolId: string;
    username: string;
}
