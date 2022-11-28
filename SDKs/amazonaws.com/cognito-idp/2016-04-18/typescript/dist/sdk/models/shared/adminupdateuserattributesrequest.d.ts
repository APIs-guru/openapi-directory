import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";
/**
 * Represents the request to update the user's attributes as an administrator.
**/
export declare class AdminUpdateUserAttributesRequest extends SpeakeasyBase {
    clientMetadata?: Map<string, string>;
    userAttributes: AttributeType[];
    userPoolId: string;
    username: string;
}
