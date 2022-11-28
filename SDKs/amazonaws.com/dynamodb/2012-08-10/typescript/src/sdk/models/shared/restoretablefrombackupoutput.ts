import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDescription } from "./tabledescription";



export class RestoreTableFromBackupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableDescription" })
  tableDescription?: TableDescription;
}
