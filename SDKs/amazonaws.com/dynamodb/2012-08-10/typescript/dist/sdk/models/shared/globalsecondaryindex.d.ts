import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
import { ProvisionedThroughput } from "./provisionedthroughput";
/**
 * Represents the properties of a global secondary index.
**/
export declare class GlobalSecondaryIndex extends SpeakeasyBase {
    indexName: string;
    keySchema: KeySchemaElement[];
    projection: Projection;
    provisionedThroughput?: ProvisionedThroughput;
}
