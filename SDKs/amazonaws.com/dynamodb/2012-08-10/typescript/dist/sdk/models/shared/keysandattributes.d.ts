import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>
**/
export declare class KeysAndAttributes extends SpeakeasyBase {
    attributesToGet?: string[];
    consistentRead?: boolean;
    expressionAttributeNames?: Map<string, string>;
    keys: Map<string, AttributeValue>[];
    projectionExpression?: string;
}
