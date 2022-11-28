import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3EncryptionModeEnum } from "./s3encryptionmodeenum";



// S3Encryption
/** 
 * Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
**/
export class S3Encryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=S3EncryptionMode" })
  s3EncryptionMode?: S3EncryptionModeEnum;
}
