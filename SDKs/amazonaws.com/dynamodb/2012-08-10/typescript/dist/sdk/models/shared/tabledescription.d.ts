import { SpeakeasyBase } from "../../../internal/utils";
import { ArchivalSummary } from "./archivalsummary";
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeSummary } from "./billingmodesummary";
import { GlobalSecondaryIndexDescription } from "./globalsecondaryindexdescription";
import { KeySchemaElement } from "./keyschemaelement";
import { LocalSecondaryIndexDescription } from "./localsecondaryindexdescription";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";
import { ReplicaDescription } from "./replicadescription";
import { RestoreSummary } from "./restoresummary";
import { SseDescription } from "./ssedescription";
import { StreamSpecification } from "./streamspecification";
import { TableStatusEnum } from "./tablestatusenum";
/**
 * Represents the properties of a table.
**/
export declare class TableDescription extends SpeakeasyBase {
    archivalSummary?: ArchivalSummary;
    attributeDefinitions?: AttributeDefinition[];
    billingModeSummary?: BillingModeSummary;
    creationDateTime?: Date;
    globalSecondaryIndexes?: GlobalSecondaryIndexDescription[];
    globalTableVersion?: string;
    itemCount?: number;
    keySchema?: KeySchemaElement[];
    latestStreamArn?: string;
    latestStreamLabel?: string;
    localSecondaryIndexes?: LocalSecondaryIndexDescription[];
    provisionedThroughput?: ProvisionedThroughputDescription;
    replicas?: ReplicaDescription[];
    restoreSummary?: RestoreSummary;
    sseDescription?: SseDescription;
    streamSpecification?: StreamSpecification;
    tableArn?: string;
    tableId?: string;
    tableName?: string;
    tableSizeBytes?: number;
    tableStatus?: TableStatusEnum;
}
