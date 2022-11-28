import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionPasswordEncryption } from "./connectionpasswordencryption";
import { EncryptionAtRest } from "./encryptionatrest";
/**
 * Contains configuration information for maintaining Data Catalog security.
**/
export declare class DataCatalogEncryptionSettings extends SpeakeasyBase {
    connectionPasswordEncryption?: ConnectionPasswordEncryption;
    encryptionAtRest?: EncryptionAtRest;
}
