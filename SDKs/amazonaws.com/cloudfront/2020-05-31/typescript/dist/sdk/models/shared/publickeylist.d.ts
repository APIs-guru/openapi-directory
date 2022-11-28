import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKeySummary } from "./publickeysummary";
/**
 * A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
**/
export declare class PublicKeyList extends SpeakeasyBase {
    items?: PublicKeySummary[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
