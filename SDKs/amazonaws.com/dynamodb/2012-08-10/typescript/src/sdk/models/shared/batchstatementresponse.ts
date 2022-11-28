import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchStatementError } from "./batchstatementerror";
import { AttributeValue } from "./attributevalue";



// BatchStatementResponse
/** 
 *  A PartiQL batch statement response.. 
**/
export class BatchStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: BatchStatementError;

  @SpeakeasyMetadata({ data: "json, name=Item", elemType: AttributeValue })
  item?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}
