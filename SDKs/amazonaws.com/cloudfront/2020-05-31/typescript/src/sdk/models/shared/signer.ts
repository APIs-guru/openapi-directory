import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPairIds } from "./keypairids";



// Signer
/** 
 * A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export class Signer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsAccountNumber?: string;

  @SpeakeasyMetadata()
  keyPairIds?: KeyPairIds;
}
