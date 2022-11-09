import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchEncryption } from "./cloudwatchencryption";
import { JobBookmarksEncryption } from "./jobbookmarksencryption";
import { S3Encryption } from "./s3encryption";


// EncryptionConfiguration
/** 
 * Specifies an encryption configuration.
**/
export class EncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchEncryption" })
  cloudWatchEncryption?: CloudWatchEncryption;

  @Metadata({ data: "json, name=JobBookmarksEncryption" })
  jobBookmarksEncryption?: JobBookmarksEncryption;

  @Metadata({ data: "json, name=S3Encryption", elemType: shared.S3Encryption })
  s3Encryption?: S3Encryption[];
}
