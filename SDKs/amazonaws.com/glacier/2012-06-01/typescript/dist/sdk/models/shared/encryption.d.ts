import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
/**
 * Contains information about the encryption used to store the job results in Amazon S3.
**/
export declare class Encryption extends SpeakeasyBase {
    encryptionType?: EncryptionTypeEnum;
    kmsContext?: string;
    kmsKeyId?: string;
}
