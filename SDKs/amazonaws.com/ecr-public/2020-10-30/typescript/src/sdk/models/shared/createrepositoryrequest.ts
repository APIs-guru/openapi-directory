import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepositoryCatalogDataInput } from "./repositorycatalogdatainput";
import { Tag } from "./tag";


export class CreateRepositoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogData" })
  catalogData?: RepositoryCatalogDataInput;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
