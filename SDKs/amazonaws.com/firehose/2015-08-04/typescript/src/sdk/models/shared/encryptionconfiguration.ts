import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KmsEncryptionConfig } from "./kmsencryptionconfig";
import { NoEncryptionConfigEnum } from "./noencryptionconfigenum";



// EncryptionConfiguration
/** 
 * Describes the encryption for a destination in Amazon S3.
**/
export class EncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KMSEncryptionConfig" })
  kmsEncryptionConfig?: KmsEncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=NoEncryptionConfig" })
  noEncryptionConfig?: NoEncryptionConfigEnum;
}
