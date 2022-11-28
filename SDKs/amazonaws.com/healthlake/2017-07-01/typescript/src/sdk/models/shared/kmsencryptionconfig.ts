import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CmkTypeEnum } from "./cmktypeenum";



// KmsEncryptionConfig
/** 
 *  The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption. 
**/
export class KmsEncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CmkType" })
  cmkType: CmkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;
}
