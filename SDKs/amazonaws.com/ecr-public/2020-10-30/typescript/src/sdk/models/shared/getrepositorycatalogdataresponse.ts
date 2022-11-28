import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryCatalogData } from "./repositorycatalogdata";



export class GetRepositoryCatalogDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogData" })
  catalogData?: RepositoryCatalogData;
}
