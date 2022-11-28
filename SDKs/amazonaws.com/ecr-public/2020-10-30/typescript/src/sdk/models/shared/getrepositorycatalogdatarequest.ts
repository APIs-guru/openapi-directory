import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRepositoryCatalogDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
