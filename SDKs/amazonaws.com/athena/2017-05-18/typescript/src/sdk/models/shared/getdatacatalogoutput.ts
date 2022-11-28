import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataCatalog } from "./datacatalog";



export class GetDataCatalogOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataCatalog" })
  dataCatalog?: DataCatalog;
}
