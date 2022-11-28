import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// KeysAndAttributes
/** 
 * <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>
**/
export class KeysAndAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @SpeakeasyMetadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Keys", elemType: AttributeValue, elemDepth: 2 })
  keys: Map<string, AttributeValue>[];

  @SpeakeasyMetadata({ data: "json, name=ProjectionExpression" })
  projectionExpression?: string;
}
