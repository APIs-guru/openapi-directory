import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDatabaseInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogName" })
  catalogName: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;
}
