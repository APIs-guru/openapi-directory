import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * The item attributes from a response in a specific table, along with the read resources consumed on the table during the request.
**/
export declare class BatchResponse extends SpeakeasyBase {
    consumedCapacityUnits?: number;
    items?: Map<string, AttributeValue>[];
}
