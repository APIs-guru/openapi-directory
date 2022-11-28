import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a public key you add to CloudFront to use with features like field-level encryption.
**/
export declare class PublicKeyConfig extends SpeakeasyBase {
    callerReference: string;
    comment?: string;
    encodedKey: string;
    name: string;
}
