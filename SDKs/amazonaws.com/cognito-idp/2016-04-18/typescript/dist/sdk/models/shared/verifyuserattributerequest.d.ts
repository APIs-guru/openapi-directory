import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to verify user attributes.
**/
export declare class VerifyUserAttributeRequest extends SpeakeasyBase {
    accessToken: string;
    attributeName: string;
    code: string;
}
