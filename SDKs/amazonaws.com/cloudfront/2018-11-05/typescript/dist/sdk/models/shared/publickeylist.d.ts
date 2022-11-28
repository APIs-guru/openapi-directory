import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKeySummary } from "./publickeysummary";
/**
 * A list of public keys you've added to CloudFront to use with features like field-level encryption.
**/
export declare class PublicKeyList extends SpeakeasyBase {
    items?: PublicKeySummary[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
