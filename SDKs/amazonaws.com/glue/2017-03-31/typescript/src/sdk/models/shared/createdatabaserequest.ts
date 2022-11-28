import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseInput } from "./databaseinput";



export class CreateDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseInput" })
  databaseInput: DatabaseInput;
}
