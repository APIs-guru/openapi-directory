import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { AttributeValue } from "./attributevalue";
/**
 * Represents the output of a <code>Query</code> operation.
**/
export declare class QueryOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity;
    count?: number;
    items?: Map<string, AttributeValue>[];
    lastEvaluatedKey?: Map<string, AttributeValue>;
    scannedCount?: number;
}
