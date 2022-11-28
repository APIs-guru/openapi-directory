import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDataCatalogEncryptionSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;
}
