import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPairIds } from "./keypairids";
/**
 * A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export declare class Signer extends SpeakeasyBase {
    awsAccountNumber?: string;
    keyPairIds?: KeyPairIds;
}
