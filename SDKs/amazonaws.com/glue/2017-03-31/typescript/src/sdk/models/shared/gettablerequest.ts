import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
