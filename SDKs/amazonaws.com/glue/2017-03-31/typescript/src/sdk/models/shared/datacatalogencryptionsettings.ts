import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionPasswordEncryption } from "./connectionpasswordencryption";
import { EncryptionAtRest } from "./encryptionatrest";


// DataCatalogEncryptionSettings
/** 
 * Contains configuration information for maintaining Data Catalog security.
**/
export class DataCatalogEncryptionSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionPasswordEncryption" })
  connectionPasswordEncryption?: ConnectionPasswordEncryption;

  @Metadata({ data: "json, name=EncryptionAtRest" })
  encryptionAtRest?: EncryptionAtRest;
}
