import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataCatalogEncryptionSettings } from "./datacatalogencryptionsettings";


export class GetDataCatalogEncryptionSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataCatalogEncryptionSettings" })
  dataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}
