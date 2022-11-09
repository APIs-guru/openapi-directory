import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptionConfiguration
/** 
 * Describes a custom encryption key that AWS App Runner uses to encrypt copies of the source repository and service logs.
**/
export class EncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKey" })
  kmsKey: string;
}
