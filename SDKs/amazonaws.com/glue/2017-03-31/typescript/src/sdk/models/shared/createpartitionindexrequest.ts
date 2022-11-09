import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PartitionIndex } from "./partitionindex";


export class CreatePartitionIndexRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=PartitionIndex" })
  partitionIndex: PartitionIndex;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
