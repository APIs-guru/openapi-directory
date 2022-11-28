import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to delete user attributes as an administrator.
**/
export declare class AdminDeleteUserAttributesRequest extends SpeakeasyBase {
    userAttributeNames: string[];
    userPoolId: string;
    username: string;
}
