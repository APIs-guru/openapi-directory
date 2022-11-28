import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryCatalogData } from "./repositorycatalogdata";
import { Repository } from "./repository";



export class CreateRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogData" })
  catalogData?: RepositoryCatalogData;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: Repository;
}
