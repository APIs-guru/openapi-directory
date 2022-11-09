import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionOptionEnum } from "./encryptionoptionenum";


// EncryptionConfiguration
/** 
 * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.
**/
export class EncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionOption" })
  encryptionOption: EncryptionOptionEnum;

  @Metadata({ data: "json, name=KmsKey" })
  kmsKey?: string;
}
