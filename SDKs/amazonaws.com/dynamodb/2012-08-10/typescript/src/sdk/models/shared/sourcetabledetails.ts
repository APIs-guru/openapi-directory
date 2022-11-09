import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingModeEnum } from "./billingmodeenum";
import { KeySchemaElement } from "./keyschemaelement";
import { ProvisionedThroughput } from "./provisionedthroughput";


// SourceTableDetails
/** 
 * Contains the details of the table when the backup was created. 
**/
export class SourceTableDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=BillingMode" })
  billingMode?: BillingModeEnum;

  @Metadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.KeySchemaElement })
  keySchema: KeySchemaElement[];

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput: ProvisionedThroughput;

  @Metadata({ data: "json, name=TableArn" })
  tableArn?: string;

  @Metadata({ data: "json, name=TableCreationDateTime" })
  tableCreationDateTime: Date;

  @Metadata({ data: "json, name=TableId" })
  tableId: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;

  @Metadata({ data: "json, name=TableSizeBytes" })
  tableSizeBytes?: number;
}
