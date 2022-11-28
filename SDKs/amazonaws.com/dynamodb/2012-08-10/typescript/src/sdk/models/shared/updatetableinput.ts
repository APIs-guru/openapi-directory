import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndexUpdate } from "./globalsecondaryindexupdate";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { ReplicationGroupUpdate } from "./replicationgroupupdate";
import { SseSpecification } from "./ssespecification";
import { StreamSpecification } from "./streamspecification";



// UpdateTableInput
/** 
 * Represents the input of an <code>UpdateTable</code> operation.
**/
export class UpdateTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeDefinitions", elemType: AttributeDefinition })
  attributeDefinitions?: AttributeDefinition[];

  @SpeakeasyMetadata({ data: "json, name=BillingMode" })
  billingMode?: BillingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexUpdates", elemType: GlobalSecondaryIndexUpdate })
  globalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughput;

  @SpeakeasyMetadata({ data: "json, name=ReplicaUpdates", elemType: ReplicationGroupUpdate })
  replicaUpdates?: ReplicationGroupUpdate[];

  @SpeakeasyMetadata({ data: "json, name=SSESpecification" })
  sseSpecification?: SseSpecification;

  @SpeakeasyMetadata({ data: "json, name=StreamSpecification" })
  streamSpecification?: StreamSpecification;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
