import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyConfig } from "./publickeyconfig";
/**
 * A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
**/
export declare class PublicKey extends SpeakeasyBase {
    createdTime: Date;
    id: string;
    publicKeyConfig: PublicKeyConfig;
}
