import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableDescription } from "./tabledescription";


// DescribeTableOutput
/** 
 * Represents the output of a <code>DescribeTable</code> operation.
**/
export class DescribeTableOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Table" })
  table?: TableDescription;
}
