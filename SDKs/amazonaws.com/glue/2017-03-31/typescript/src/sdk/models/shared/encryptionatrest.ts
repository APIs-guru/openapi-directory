import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogEncryptionModeEnum } from "./catalogencryptionmodeenum";



// EncryptionAtRest
/** 
 * Specifies the encryption-at-rest configuration for the Data Catalog.
**/
export class EncryptionAtRest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogEncryptionMode" })
  catalogEncryptionMode: CatalogEncryptionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=SseAwsKmsKeyId" })
  sseAwsKmsKeyId?: string;
}
