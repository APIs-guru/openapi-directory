import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionName" })
  connectionName: string;
}
