import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CatalogEncryptionModeEnum } from "./catalogencryptionmodeenum";


// EncryptionAtRest
/** 
 * Specifies the encryption-at-rest configuration for the Data Catalog.
**/
export class EncryptionAtRest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogEncryptionMode" })
  catalogEncryptionMode: CatalogEncryptionModeEnum;

  @Metadata({ data: "json, name=SseAwsKmsKeyId" })
  sseAwsKmsKeyId?: string;
}
