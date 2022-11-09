import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataCatalog } from "./datacatalog";


export class GetDataCatalogOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataCatalog" })
  dataCatalog?: DataCatalog;
}
