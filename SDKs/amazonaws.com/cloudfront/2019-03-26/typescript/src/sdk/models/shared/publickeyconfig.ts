import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeyConfig
/** 
 * Information about a public key you add to CloudFront to use with features like field-level encryption.
**/
export class PublicKeyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callerReference: string;

  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  encodedKey: string;

  @SpeakeasyMetadata()
  name: string;
}
