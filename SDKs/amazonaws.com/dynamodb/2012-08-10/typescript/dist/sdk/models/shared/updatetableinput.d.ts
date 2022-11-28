import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndexUpdate } from "./globalsecondaryindexupdate";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { ReplicationGroupUpdate } from "./replicationgroupupdate";
import { SseSpecification } from "./ssespecification";
import { StreamSpecification } from "./streamspecification";
/**
 * Represents the input of an <code>UpdateTable</code> operation.
**/
export declare class UpdateTableInput extends SpeakeasyBase {
    attributeDefinitions?: AttributeDefinition[];
    billingMode?: BillingModeEnum;
    globalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdate[];
    provisionedThroughput?: ProvisionedThroughput;
    replicaUpdates?: ReplicationGroupUpdate[];
    sseSpecification?: SseSpecification;
    streamSpecification?: StreamSpecification;
    tableName: string;
}
