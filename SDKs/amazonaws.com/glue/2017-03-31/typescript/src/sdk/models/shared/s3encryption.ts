import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3EncryptionModeEnum } from "./s3encryptionmodeenum";


// S3Encryption
/** 
 * Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
**/
export class S3Encryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=S3EncryptionMode" })
  s3EncryptionMode?: S3EncryptionModeEnum;
}
