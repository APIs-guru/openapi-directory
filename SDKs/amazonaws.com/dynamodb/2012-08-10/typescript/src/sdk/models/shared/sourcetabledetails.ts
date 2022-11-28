import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
import { KeySchemaElement } from "./keyschemaelement";
import { ProvisionedThroughput } from "./provisionedthroughput";



// SourceTableDetails
/** 
 * Contains the details of the table when the backup was created. 
**/
export class SourceTableDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BillingMode" })
  billingMode?: BillingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement })
  keySchema: KeySchemaElement[];

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput: ProvisionedThroughput;

  @SpeakeasyMetadata({ data: "json, name=TableArn" })
  tableArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TableCreationDateTime" })
  tableCreationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=TableId" })
  tableId: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=TableSizeBytes" })
  tableSizeBytes?: number;
}
