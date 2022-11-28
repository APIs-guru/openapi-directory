import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeTableInput
/** 
 * Represents the input of a <code>DescribeTable</code> operation.
**/
export class DescribeTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
