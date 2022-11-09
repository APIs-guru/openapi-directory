import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// Get
/** 
 * Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.
**/
export class Get extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @Metadata({ data: "json, name=Key", elemType: shared.AttributeValue })
  key: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ProjectionExpression" })
  projectionExpression?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
