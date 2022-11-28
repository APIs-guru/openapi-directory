import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySchema } from "./keyschema";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";
import { TableStatusEnum } from "./tablestatusenum";



export class TableDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=KeySchema" })
  keySchema?: KeySchema;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughputDescription;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableSizeBytes" })
  tableSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=TableStatus" })
  tableStatus?: TableStatusEnum;
}
