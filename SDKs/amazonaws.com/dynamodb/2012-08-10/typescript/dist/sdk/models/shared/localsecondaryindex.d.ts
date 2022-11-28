import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
/**
 * Represents the properties of a local secondary index.
**/
export declare class LocalSecondaryIndex extends SpeakeasyBase {
    indexName: string;
    keySchema: KeySchemaElement[];
    projection: Projection;
}
