import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";


// Encryption
/** 
 * Contains information about the encryption used to store the job results in Amazon S3. 
**/
export class Encryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @Metadata({ data: "json, name=KMSContext" })
  kmsContext?: string;

  @Metadata({ data: "json, name=KMSKeyId" })
  kmsKeyId?: string;
}
