import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryCatalogData } from "./repositorycatalogdata";
import { Repository } from "./repository";
export declare class CreateRepositoryResponse extends SpeakeasyBase {
    catalogData?: RepositoryCatalogData;
    repository?: Repository;
}
