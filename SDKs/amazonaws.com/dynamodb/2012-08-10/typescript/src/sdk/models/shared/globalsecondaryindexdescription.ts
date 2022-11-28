import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexStatusEnum } from "./indexstatusenum";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";



// GlobalSecondaryIndexDescription
/** 
 * Represents the properties of a global secondary index.
**/
export class GlobalSecondaryIndexDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Backfilling" })
  backfilling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IndexArn" })
  indexArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexSizeBytes" })
  indexSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=IndexStatus" })
  indexStatus?: IndexStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement })
  keySchema?: KeySchemaElement[];

  @SpeakeasyMetadata({ data: "json, name=Projection" })
  projection?: Projection;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughputDescription;
}
