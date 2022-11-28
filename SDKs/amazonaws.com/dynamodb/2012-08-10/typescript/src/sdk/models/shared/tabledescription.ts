import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ArchivalSummary" })
  archivalSummary?: ArchivalSummary;

  @SpeakeasyMetadata({ data: "json, name=AttributeDefinitions", elemType: AttributeDefinition })
  attributeDefinitions?: AttributeDefinition[];

  @SpeakeasyMetadata({ data: "json, name=BillingModeSummary" })
  billingModeSummary?: BillingModeSummary;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: GlobalSecondaryIndexDescription })
  globalSecondaryIndexes?: GlobalSecondaryIndexDescription[];

  @SpeakeasyMetadata({ data: "json, name=GlobalTableVersion" })
  globalTableVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement })
  keySchema?: KeySchemaElement[];

  @SpeakeasyMetadata({ data: "json, name=LatestStreamArn" })
  latestStreamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestStreamLabel" })
  latestStreamLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexes", elemType: LocalSecondaryIndexDescription })
  localSecondaryIndexes?: LocalSecondaryIndexDescription[];

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughputDescription;

  @SpeakeasyMetadata({ data: "json, name=Replicas", elemType: ReplicaDescription })
  replicas?: ReplicaDescription[];

  @SpeakeasyMetadata({ data: "json, name=RestoreSummary" })
  restoreSummary?: RestoreSummary;

  @SpeakeasyMetadata({ data: "json, name=SSEDescription" })
  sseDescription?: SseDescription;

  @SpeakeasyMetadata({ data: "json, name=StreamSpecification" })
  streamSpecification?: StreamSpecification;

  @SpeakeasyMetadata({ data: "json, name=TableArn" })
  tableArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TableId" })
  tableId?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableSizeBytes" })
  tableSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=TableStatus" })
  tableStatus?: TableStatusEnum;
}
