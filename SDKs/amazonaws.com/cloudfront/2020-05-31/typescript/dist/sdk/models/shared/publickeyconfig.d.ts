import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
**/
export declare class PublicKeyConfig extends SpeakeasyBase {
    callerReference: string;
    comment?: string;
    encodedKey: string;
    name: string;
}
