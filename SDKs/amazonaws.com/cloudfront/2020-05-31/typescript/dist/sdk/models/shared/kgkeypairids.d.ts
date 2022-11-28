import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPairIds } from "./keypairids";
/**
 * A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export declare class KgKeyPairIds extends SpeakeasyBase {
    keyGroupId?: string;
    keyPairIds?: KeyPairIds;
}
