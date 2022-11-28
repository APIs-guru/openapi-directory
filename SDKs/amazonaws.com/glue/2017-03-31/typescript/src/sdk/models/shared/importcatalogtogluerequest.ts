import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportCatalogToGlueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;
}
