import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionPasswordEncryption } from "./connectionpasswordencryption";
import { EncryptionAtRest } from "./encryptionatrest";



// DataCatalogEncryptionSettings
/** 
 * Contains configuration information for maintaining Data Catalog security.
**/
export class DataCatalogEncryptionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionPasswordEncryption" })
  connectionPasswordEncryption?: ConnectionPasswordEncryption;

  @SpeakeasyMetadata({ data: "json, name=EncryptionAtRest" })
  encryptionAtRest?: EncryptionAtRest;
}
