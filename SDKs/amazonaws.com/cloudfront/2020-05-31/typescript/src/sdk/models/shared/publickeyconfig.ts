import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeyConfig
/** 
 * Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
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
