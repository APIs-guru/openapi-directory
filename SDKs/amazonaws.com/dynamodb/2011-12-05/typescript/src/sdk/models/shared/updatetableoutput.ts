import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableDescription } from "./tabledescription";


export class UpdateTableOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableDescription" })
  tableDescription?: TableDescription;
}
