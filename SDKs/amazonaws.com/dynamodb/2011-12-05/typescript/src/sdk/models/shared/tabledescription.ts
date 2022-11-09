import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeySchema } from "./keyschema";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";
import { TableStatusEnum } from "./tablestatusenum";


export class TableDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=KeySchema" })
  keySchema?: KeySchema;

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughputDescription;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=TableSizeBytes" })
  tableSizeBytes?: number;

  @Metadata({ data: "json, name=TableStatus" })
  tableStatus?: TableStatusEnum;
}
