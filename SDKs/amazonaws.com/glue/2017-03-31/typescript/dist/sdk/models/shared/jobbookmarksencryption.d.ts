import { SpeakeasyBase } from "../../../internal/utils";
import { JobBookmarksEncryptionModeEnum } from "./jobbookmarksencryptionmodeenum";
/**
 * Specifies how job bookmark data should be encrypted.
**/
export declare class JobBookmarksEncryption extends SpeakeasyBase {
    jobBookmarksEncryptionMode?: JobBookmarksEncryptionModeEnum;
    kmsKeyArn?: string;
}
