import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
import { ProvisionedThroughput } from "./provisionedthroughput";
/**
 * Represents the properties of a global secondary index for the table when the backup was created.
**/
export declare class GlobalSecondaryIndexInfo extends SpeakeasyBase {
    indexName?: string;
    keySchema?: KeySchemaElement[];
    projection?: Projection;
    provisionedThroughput?: ProvisionedThroughput;
}
