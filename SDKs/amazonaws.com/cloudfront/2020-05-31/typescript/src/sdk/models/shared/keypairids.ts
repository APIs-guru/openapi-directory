import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyPairIds
/** 
 * A list of CloudFront key pair identifiers.
**/
export class KeyPairIds extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
