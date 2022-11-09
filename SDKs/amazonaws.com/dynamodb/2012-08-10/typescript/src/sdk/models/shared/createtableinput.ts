import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AttributeDefinitions", elemType: shared.AttributeDefinition })
  attributeDefinitions: AttributeDefinition[];

  @Metadata({ data: "json, name=BillingMode" })
  billingMode?: BillingModeEnum;

  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.GlobalSecondaryIndex })
  globalSecondaryIndexes?: GlobalSecondaryIndex[];

  @Metadata({ data: "json, name=KeySchema", elemType: shared.KeySchemaElement })
  keySchema: KeySchemaElement[];

  @Metadata({ data: "json, name=LocalSecondaryIndexes", elemType: shared.LocalSecondaryIndex })
  localSecondaryIndexes?: LocalSecondaryIndex[];

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughput;

  @Metadata({ data: "json, name=SSESpecification" })
  sseSpecification?: SseSpecification;

  @Metadata({ data: "json, name=StreamSpecification" })
  streamSpecification?: StreamSpecification;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
