import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { KeySchemaElement } from "./keyschemaelement";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SseSpecification } from "./ssespecification";
import { StreamSpecification } from "./streamspecification";
import { Tag } from "./tag";
/**
 * Represents the input of a <code>CreateTable</code> operation.
**/
export declare class CreateTableInput extends SpeakeasyBase {
    attributeDefinitions: AttributeDefinition[];
    billingMode?: BillingModeEnum;
    globalSecondaryIndexes?: GlobalSecondaryIndex[];
    keySchema: KeySchemaElement[];
    localSecondaryIndexes?: LocalSecondaryIndex[];
    provisionedThroughput?: ProvisionedThroughput;
    sseSpecification?: SseSpecification;
    streamSpecification?: StreamSpecification;
    tableName: string;
    tags?: Tag[];
}
