import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatabaseInput } from "./databaseinput";


export class CreateDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseInput" })
  databaseInput: DatabaseInput;
}
