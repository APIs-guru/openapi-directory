import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// Get
/** 
 * Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.
**/
export class Get extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Key", elemType: AttributeValue })
  key: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ProjectionExpression" })
  projectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
