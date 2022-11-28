import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
