import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IndexStatusEnum } from "./indexstatusenum";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";


// GlobalSecondaryIndexDescription
/** 
 * Represents the properties of a global secondary index.
**/
export class GlobalSecondaryIndexDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Backfilling" })
  backfilling?: boolean;

  @Metadata({ data: "json, name=IndexArn" })
  indexArn?: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=IndexSizeBytes" })
  indexSizeBytes?: number;

  @Metadata({ data: "json, name=IndexStatus" })
  indexStatus?: IndexStatusEnum;

  @Metadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.KeySchemaElement })
  keySchema?: KeySchemaElement[];

  @Metadata({ data: "json, name=Projection" })
  projection?: Projection;

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughputDescription;
}
