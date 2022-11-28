import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchEncryption } from "./cloudwatchencryption";
import { JobBookmarksEncryption } from "./jobbookmarksencryption";
import { S3Encryption } from "./s3encryption";
/**
 * Specifies an encryption configuration.
**/
export declare class EncryptionConfiguration extends SpeakeasyBase {
    cloudWatchEncryption?: CloudWatchEncryption;
    jobBookmarksEncryption?: JobBookmarksEncryption;
    s3Encryption?: S3Encryption[];
}
