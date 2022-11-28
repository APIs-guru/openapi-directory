import { SpeakeasyBase } from "../../../internal/utils";
import { IndexStatusEnum } from "./indexstatusenum";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";
/**
 * Represents the properties of a global secondary index.
**/
export declare class GlobalSecondaryIndexDescription extends SpeakeasyBase {
    backfilling?: boolean;
    indexArn?: string;
    indexName?: string;
    indexSizeBytes?: number;
    indexStatus?: IndexStatusEnum;
    itemCount?: number;
    keySchema?: KeySchemaElement[];
    projection?: Projection;
    provisionedThroughput?: ProvisionedThroughputDescription;
}
