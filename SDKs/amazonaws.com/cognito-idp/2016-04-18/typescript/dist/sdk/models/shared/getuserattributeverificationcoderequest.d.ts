import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to get user attribute verification.
**/
export declare class GetUserAttributeVerificationCodeRequest extends SpeakeasyBase {
    accessToken: string;
    attributeName: string;
    clientMetadata?: Map<string, string>;
}
