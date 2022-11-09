import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatabaseInput } from "./databaseinput";


export class UpdateDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseInput" })
  databaseInput: DatabaseInput;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
