import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
import { ProvisionedThroughput } from "./provisionedthroughput";
/**
 * Represents a new global secondary index to be added to an existing table.
**/
export declare class CreateGlobalSecondaryIndexAction extends SpeakeasyBase {
    indexName: string;
    keySchema: KeySchemaElement[];
    projection: Projection;
    provisionedThroughput?: ProvisionedThroughput;
}
