import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KmsEncryptionConfig
/** 
 * Describes an encryption key for a destination in Amazon S3.
**/
export class KmsEncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AWSKMSKeyARN" })
  awskmsKeyArn: string;
}
