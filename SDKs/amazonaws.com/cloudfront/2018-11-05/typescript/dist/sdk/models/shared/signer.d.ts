import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPairIds } from "./keypairids";
/**
 * A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any.
**/
export declare class Signer extends SpeakeasyBase {
    awsAccountNumber?: string;
    keyPairIds?: KeyPairIds;
}
