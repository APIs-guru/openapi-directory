import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDatabaseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogName" })
  catalogName: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;
}
