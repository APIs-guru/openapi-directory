import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionOptionEnum } from "./encryptionoptionenum";
/**
 * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.
**/
export declare class EncryptionConfiguration extends SpeakeasyBase {
    encryptionOption: EncryptionOptionEnum;
    kmsKey?: string;
}
