import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogEncryptionSettings } from "./datacatalogencryptionsettings";



export class GetDataCatalogEncryptionSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataCatalogEncryptionSettings" })
  dataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}
