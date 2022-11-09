import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchEncryptionModeEnum } from "./cloudwatchencryptionmodeenum";


// CloudWatchEncryption
/** 
 * Specifies how Amazon CloudWatch data should be encrypted.
**/
export class CloudWatchEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchEncryptionMode" })
  cloudWatchEncryptionMode?: CloudWatchEncryptionModeEnum;

  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;
}
