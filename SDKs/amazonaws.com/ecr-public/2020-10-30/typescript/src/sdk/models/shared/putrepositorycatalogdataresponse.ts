import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryCatalogData } from "./repositorycatalogdata";


export class PutRepositoryCatalogDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogData" })
  catalogData?: RepositoryCatalogData;
}
