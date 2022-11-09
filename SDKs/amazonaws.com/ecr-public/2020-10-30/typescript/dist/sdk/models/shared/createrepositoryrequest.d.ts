import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryCatalogDataInput } from "./repositorycatalogdatainput";
import { Tag } from "./tag";
export declare class CreateRepositoryRequest extends SpeakeasyBase {
    catalogData?: RepositoryCatalogDataInput;
    repositoryName: string;
    tags?: Tag[];
}
