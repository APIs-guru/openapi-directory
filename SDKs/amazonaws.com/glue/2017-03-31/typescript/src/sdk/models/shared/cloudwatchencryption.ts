import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchEncryptionModeEnum } from "./cloudwatchencryptionmodeenum";



// CloudWatchEncryption
/** 
 * Specifies how Amazon CloudWatch data should be encrypted.
**/
export class CloudWatchEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchEncryptionMode" })
  cloudWatchEncryptionMode?: CloudWatchEncryptionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;
}
