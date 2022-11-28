import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to delete a user as an administrator.
**/
export declare class AdminDeleteUserRequest extends SpeakeasyBase {
    userPoolId: string;
    username: string;
}
