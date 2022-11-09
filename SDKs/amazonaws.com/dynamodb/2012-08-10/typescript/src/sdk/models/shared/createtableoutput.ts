import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableDescription } from "./tabledescription";


// CreateTableOutput
/** 
 * Represents the output of a <code>CreateTable</code> operation.
**/
export class CreateTableOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableDescription" })
  tableDescription?: TableDescription;
}
