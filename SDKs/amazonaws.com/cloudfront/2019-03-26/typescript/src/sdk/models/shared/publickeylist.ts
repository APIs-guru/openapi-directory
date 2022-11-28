import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKeySummary } from "./publickeysummary";



// PublicKeyList
/** 
 * A list of public keys you've added to CloudFront to use with features like field-level encryption.
**/
export class PublicKeyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PublicKeySummary })
  items?: PublicKeySummary[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
