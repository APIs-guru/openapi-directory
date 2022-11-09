import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryCatalogData } from "./repositorycatalogdata";
import { Repository } from "./repository";


export class CreateRepositoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogData" })
  catalogData?: RepositoryCatalogData;

  @Metadata({ data: "json, name=repository" })
  repository?: Repository;
}
