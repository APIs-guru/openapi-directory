import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeTableInput
/** 
 * Represents the input of a <code>DescribeTable</code> operation.
**/
export class DescribeTableInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
