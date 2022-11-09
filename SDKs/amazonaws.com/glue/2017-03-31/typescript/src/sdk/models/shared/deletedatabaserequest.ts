import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
