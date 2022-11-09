import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobBookmarksEncryptionModeEnum } from "./jobbookmarksencryptionmodeenum";


// JobBookmarksEncryption
/** 
 * Specifies how job bookmark data should be encrypted.
**/
export class JobBookmarksEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobBookmarksEncryptionMode" })
  jobBookmarksEncryptionMode?: JobBookmarksEncryptionModeEnum;

  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;
}
