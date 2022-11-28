import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchEncryption } from "./cloudwatchencryption";
import { JobBookmarksEncryption } from "./jobbookmarksencryption";
import { S3Encryption } from "./s3encryption";



// EncryptionConfiguration
/** 
 * Specifies an encryption configuration.
**/
export class EncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchEncryption" })
  cloudWatchEncryption?: CloudWatchEncryption;

  @SpeakeasyMetadata({ data: "json, name=JobBookmarksEncryption" })
  jobBookmarksEncryption?: JobBookmarksEncryption;

  @SpeakeasyMetadata({ data: "json, name=S3Encryption", elemType: S3Encryption })
  s3Encryption?: S3Encryption[];
}
