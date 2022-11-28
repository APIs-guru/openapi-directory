import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Signer } from "./signer";



// ActiveTrustedSigners
/** 
 * A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export class ActiveTrustedSigners extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata({ elemType: Signer })
  items?: Signer[];

  @SpeakeasyMetadata()
  quantity: number;
}
