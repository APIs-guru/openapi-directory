import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKeySummary } from "./publickeysummary";



// PublicKeyList
/** 
 * A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
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
