import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { KeySchemaElement } from "./keyschemaelement";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SseSpecification } from "./ssespecification";
import { StreamSpecification } from "./streamspecification";
import { Tag } from "./tag";



// CreateTableInput
/** 
 * Represents the input of a <code>CreateTable</code> operation.
**/
export class CreateTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeDefinitions", elemType: AttributeDefinition })
  attributeDefinitions: AttributeDefinition[];

  @SpeakeasyMetadata({ data: "json, name=BillingMode" })
  billingMode?: BillingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: GlobalSecondaryIndex })
  globalSecondaryIndexes?: GlobalSecondaryIndex[];

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement })
  keySchema: KeySchemaElement[];

  @SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexes", elemType: LocalSecondaryIndex })
  localSecondaryIndexes?: LocalSecondaryIndex[];

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughput;

  @SpeakeasyMetadata({ data: "json, name=SSESpecification" })
  sseSpecification?: SseSpecification;

  @SpeakeasyMetadata({ data: "json, name=StreamSpecification" })
  streamSpecification?: StreamSpecification;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
