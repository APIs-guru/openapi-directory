import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyPairIds
/** 
 * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a>ActiveTrustedSigners</a>.</p>
**/
export class KeyPairIds extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
