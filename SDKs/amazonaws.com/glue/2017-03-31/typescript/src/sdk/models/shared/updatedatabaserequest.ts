import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseInput } from "./databaseinput";



export class UpdateDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseInput" })
  databaseInput: DatabaseInput;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
