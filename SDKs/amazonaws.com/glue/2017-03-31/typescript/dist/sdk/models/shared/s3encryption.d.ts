import { SpeakeasyBase } from "../../../internal/utils";
import { S3EncryptionModeEnum } from "./s3encryptionmodeenum";
/**
 * Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
**/
export declare class S3Encryption extends SpeakeasyBase {
    kmsKeyArn?: string;
    s3EncryptionMode?: S3EncryptionModeEnum;
}
