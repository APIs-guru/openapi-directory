import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to change a user password.
**/
export declare class ChangePasswordRequest extends SpeakeasyBase {
    accessToken: string;
    previousPassword: string;
    proposedPassword: string;
}
