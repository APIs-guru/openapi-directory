import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobBookmarksEncryptionModeEnum } from "./jobbookmarksencryptionmodeenum";



// JobBookmarksEncryption
/** 
 * Specifies how job bookmark data should be encrypted.
**/
export class JobBookmarksEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobBookmarksEncryptionMode" })
  jobBookmarksEncryptionMode?: JobBookmarksEncryptionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;
}
