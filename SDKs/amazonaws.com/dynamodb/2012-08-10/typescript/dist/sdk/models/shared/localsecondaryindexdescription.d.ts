import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
/**
 * Represents the properties of a local secondary index.
**/
export declare class LocalSecondaryIndexDescription extends SpeakeasyBase {
    indexArn?: string;
    indexName?: string;
    indexSizeBytes?: number;
    itemCount?: number;
    keySchema?: KeySchemaElement[];
    projection?: Projection;
}
