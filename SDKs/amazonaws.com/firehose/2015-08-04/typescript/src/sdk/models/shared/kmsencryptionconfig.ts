import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KmsEncryptionConfig
/** 
 * Describes an encryption key for a destination in Amazon S3.
**/
export class KmsEncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AWSKMSKeyARN" })
  awskmsKeyArn: string;
}
