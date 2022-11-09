import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataCatalogEncryptionSettings } from "./datacatalogencryptionsettings";


export class PutDataCatalogEncryptionSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DataCatalogEncryptionSettings" })
  dataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
}
