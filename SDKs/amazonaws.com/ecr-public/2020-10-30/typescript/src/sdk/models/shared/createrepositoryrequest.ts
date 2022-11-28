import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryCatalogDataInput } from "./repositorycatalogdatainput";
import { Tag } from "./tag";



export class CreateRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogData" })
  catalogData?: RepositoryCatalogDataInput;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
