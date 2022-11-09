import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
import { ProvisionedThroughput } from "./provisionedthroughput";


// CreateGlobalSecondaryIndexAction
/** 
 * Represents a new global secondary index to be added to an existing table.
**/
export class CreateGlobalSecondaryIndexAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.KeySchemaElement })
  keySchema: KeySchemaElement[];

  @Metadata({ data: "json, name=Projection" })
  projection: Projection;

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughput;
}
