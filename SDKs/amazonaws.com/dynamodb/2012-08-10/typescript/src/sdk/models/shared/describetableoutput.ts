import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDescription } from "./tabledescription";



// DescribeTableOutput
/** 
 * Represents the output of a <code>DescribeTable</code> operation.
**/
export class DescribeTableOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Table" })
  table?: TableDescription;
}
