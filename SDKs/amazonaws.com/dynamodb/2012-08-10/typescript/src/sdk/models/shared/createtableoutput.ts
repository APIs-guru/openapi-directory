import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDescription } from "./tabledescription";



// CreateTableOutput
/** 
 * Represents the output of a <code>CreateTable</code> operation.
**/
export class CreateTableOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableDescription" })
  tableDescription?: TableDescription;
}
