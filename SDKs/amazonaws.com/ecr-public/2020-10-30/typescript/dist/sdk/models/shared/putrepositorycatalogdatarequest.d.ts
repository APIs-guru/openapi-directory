import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryCatalogDataInput } from "./repositorycatalogdatainput";
export declare class PutRepositoryCatalogDataRequest extends SpeakeasyBase {
    catalogData: RepositoryCatalogDataInput;
    registryId?: string;
    repositoryName: string;
}
