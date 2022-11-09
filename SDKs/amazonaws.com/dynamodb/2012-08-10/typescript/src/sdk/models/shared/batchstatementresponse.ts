import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchStatementError } from "./batchstatementerror";
import { AttributeValue } from "./attributevalue";


// BatchStatementResponse
/** 
 *  A PartiQL batch statement response.. 
**/
export class BatchStatementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: BatchStatementError;

  @Metadata({ data: "json, name=Item", elemType: shared.AttributeValue })
  item?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
