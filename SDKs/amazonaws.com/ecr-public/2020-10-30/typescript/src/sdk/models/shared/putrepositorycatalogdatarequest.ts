import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryCatalogDataInput } from "./repositorycatalogdatainput";



export class PutRepositoryCatalogDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogData" })
  catalogData: RepositoryCatalogDataInput;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
