import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableDescription } from "./tabledescription";


// UpdateTableOutput
/** 
 * Represents the output of an <code>UpdateTable</code> operation.
**/
export class UpdateTableOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableDescription" })
  tableDescription?: TableDescription;
}
