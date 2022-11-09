import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryCatalogDataInput } from "./repositorycatalogdatainput";


export class PutRepositoryCatalogDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogData" })
  catalogData: RepositoryCatalogDataInput;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
