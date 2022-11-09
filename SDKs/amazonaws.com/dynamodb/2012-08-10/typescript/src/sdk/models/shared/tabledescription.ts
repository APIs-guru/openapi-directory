import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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


// TableDescription
/** 
 * Represents the properties of a table.
**/
export class TableDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchivalSummary" })
  archivalSummary?: ArchivalSummary;

  @Metadata({ data: "json, name=AttributeDefinitions", elemType: shared.AttributeDefinition })
  attributeDefinitions?: AttributeDefinition[];

  @Metadata({ data: "json, name=BillingModeSummary" })
  billingModeSummary?: BillingModeSummary;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.GlobalSecondaryIndexDescription })
  globalSecondaryIndexes?: GlobalSecondaryIndexDescription[];

  @Metadata({ data: "json, name=GlobalTableVersion" })
  globalTableVersion?: string;

  @Metadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.KeySchemaElement })
  keySchema?: KeySchemaElement[];

  @Metadata({ data: "json, name=LatestStreamArn" })
  latestStreamArn?: string;

  @Metadata({ data: "json, name=LatestStreamLabel" })
  latestStreamLabel?: string;

  @Metadata({ data: "json, name=LocalSecondaryIndexes", elemType: shared.LocalSecondaryIndexDescription })
  localSecondaryIndexes?: LocalSecondaryIndexDescription[];

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughputDescription;

  @Metadata({ data: "json, name=Replicas", elemType: shared.ReplicaDescription })
  replicas?: ReplicaDescription[];

  @Metadata({ data: "json, name=RestoreSummary" })
  restoreSummary?: RestoreSummary;

  @Metadata({ data: "json, name=SSEDescription" })
  sseDescription?: SseDescription;

  @Metadata({ data: "json, name=StreamSpecification" })
  streamSpecification?: StreamSpecification;

  @Metadata({ data: "json, name=TableArn" })
  tableArn?: string;

  @Metadata({ data: "json, name=TableId" })
  tableId?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=TableSizeBytes" })
  tableSizeBytes?: number;

  @Metadata({ data: "json, name=TableStatus" })
  tableStatus?: TableStatusEnum;
}
