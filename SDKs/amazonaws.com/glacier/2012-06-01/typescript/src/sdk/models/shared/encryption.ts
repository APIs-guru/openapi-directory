import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";



// Encryption
/** 
 * Contains information about the encryption used to store the job results in Amazon S3. 
**/
export class Encryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KMSContext" })
  kmsContext?: string;

  @SpeakeasyMetadata({ data: "json, name=KMSKeyId" })
  kmsKeyId?: string;
}
