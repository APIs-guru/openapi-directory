import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCatalogImportStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;
}
