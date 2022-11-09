import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableDescription } from "./tabledescription";


// DeleteTableOutput
/** 
 * Represents the output of a <code>DeleteTable</code> operation.
**/
export class DeleteTableOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableDescription" })
  tableDescription?: TableDescription;
}
