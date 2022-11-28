import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryCatalogData } from "./repositorycatalogdata";



export class PutRepositoryCatalogDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogData" })
  catalogData?: RepositoryCatalogData;
}
