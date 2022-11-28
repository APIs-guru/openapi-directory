import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to delete user attributes.
**/
export declare class DeleteUserAttributesRequest extends SpeakeasyBase {
    accessToken: string;
    userAttributeNames: string[];
}
