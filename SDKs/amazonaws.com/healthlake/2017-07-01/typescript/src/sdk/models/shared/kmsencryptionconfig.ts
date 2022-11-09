import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CmkTypeEnum } from "./cmktypeenum";


// KmsEncryptionConfig
/** 
 *  The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption. 
**/
export class KmsEncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=CmkType" })
  cmkType: CmkTypeEnum;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;
}
