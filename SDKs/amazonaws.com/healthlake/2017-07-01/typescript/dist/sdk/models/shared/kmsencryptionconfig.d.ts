import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CmkTypeEnum } from "./cmktypeenum";
/**
 *  The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
**/
export declare class KmsEncryptionConfig extends SpeakeasyBase {
    cmkType: CmkTypeEnum;
    kmsKeyId?: string;
}
