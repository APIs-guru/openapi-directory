import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogEncryptionSettings } from "./datacatalogencryptionsettings";
export declare class PutDataCatalogEncryptionSettingsRequest extends SpeakeasyBase {
    catalogId?: string;
    dataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
}
