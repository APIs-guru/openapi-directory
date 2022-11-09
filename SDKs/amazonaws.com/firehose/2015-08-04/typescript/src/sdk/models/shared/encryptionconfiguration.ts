import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KmsEncryptionConfig } from "./kmsencryptionconfig";
import { NoEncryptionConfigEnum } from "./noencryptionconfigenum";


// EncryptionConfiguration
/** 
 * Describes the encryption for a destination in Amazon S3.
**/
export class EncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=KMSEncryptionConfig" })
  kmsEncryptionConfig?: KmsEncryptionConfig;

  @Metadata({ data: "json, name=NoEncryptionConfig" })
  noEncryptionConfig?: NoEncryptionConfigEnum;
}
