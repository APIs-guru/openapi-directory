import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDescription } from "./tabledescription";



// DeleteTableOutput
/** 
 * Represents the output of a <code>DeleteTable</code> operation.
**/
export class DeleteTableOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableDescription" })
  tableDescription?: TableDescription;
}
