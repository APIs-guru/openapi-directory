import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPairIds } from "./keypairids";



// Signer
/** 
 * A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any. 
**/
export class Signer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsAccountNumber?: string;

  @SpeakeasyMetadata()
  keyPairIds?: KeyPairIds;
}
