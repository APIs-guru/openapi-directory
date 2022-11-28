import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDescription } from "./tabledescription";



// UpdateTableOutput
/** 
 * Represents the output of an <code>UpdateTable</code> operation.
**/
export class UpdateTableOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableDescription" })
  tableDescription?: TableDescription;
}
