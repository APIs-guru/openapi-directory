import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDescription } from "./tabledescription";



export class RestoreTableToPointInTimeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableDescription" })
  tableDescription?: TableDescription;
}
