import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchEncryptionModeEnum } from "./cloudwatchencryptionmodeenum";
/**
 * Specifies how Amazon CloudWatch data should be encrypted.
**/
export declare class CloudWatchEncryption extends SpeakeasyBase {
    cloudWatchEncryptionMode?: CloudWatchEncryptionModeEnum;
    kmsKeyArn?: string;
}
