import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPairIds } from "./keypairids";



// KgKeyPairIds
/** 
 * A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export class KgKeyPairIds extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyGroupId?: string;

  @SpeakeasyMetadata()
  keyPairIds?: KeyPairIds;
}
