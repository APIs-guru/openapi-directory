import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
/**
 * Represents the properties of a local secondary index for the table when the backup was created.
**/
export declare class LocalSecondaryIndexInfo extends SpeakeasyBase {
    indexName?: string;
    keySchema?: KeySchemaElement[];
    projection?: Projection;
}
