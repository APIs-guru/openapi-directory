import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AttributeDefinitions", elemType: shared.AttributeDefinition })
  attributeDefinitions?: AttributeDefinition[];

  @Metadata({ data: "json, name=BillingMode" })
  billingMode?: BillingModeEnum;

  @Metadata({ data: "json, name=GlobalSecondaryIndexUpdates", elemType: shared.GlobalSecondaryIndexUpdate })
  globalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdate[];

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughput;

  @Metadata({ data: "json, name=ReplicaUpdates", elemType: shared.ReplicationGroupUpdate })
  replicaUpdates?: ReplicationGroupUpdate[];

  @Metadata({ data: "json, name=SSESpecification" })
  sseSpecification?: SseSpecification;

  @Metadata({ data: "json, name=StreamSpecification" })
  streamSpecification?: StreamSpecification;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
