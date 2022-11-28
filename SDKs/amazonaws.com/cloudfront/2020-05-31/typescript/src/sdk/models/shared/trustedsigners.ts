import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedSigners
/** 
 * A list of accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
export class TrustedSigners extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
