import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EncryptionConfiguration
/** 
 * Describes a custom encryption key that AWS App Runner uses to encrypt copies of the source repository and service logs.
**/
export class EncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKey" })
  kmsKey: string;
}
