import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogEncryptionModeEnum } from "./catalogencryptionmodeenum";
/**
 * Specifies the encryption-at-rest configuration for the Data Catalog.
**/
export declare class EncryptionAtRest extends SpeakeasyBase {
    catalogEncryptionMode: CatalogEncryptionModeEnum;
    sseAwsKmsKeyId?: string;
}
