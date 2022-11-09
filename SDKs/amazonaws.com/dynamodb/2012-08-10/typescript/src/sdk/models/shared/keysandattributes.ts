import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// KeysAndAttributes
/** 
 * <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>
**/
export class KeysAndAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @Metadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @Metadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @Metadata({ data: "json, name=Keys", elemType: shared.AttributeValue, elemDepth: 2 })
  keys: Map<string, AttributeValue>[];

  @Metadata({ data: "json, name=ProjectionExpression" })
  projectionExpression?: string;
}
