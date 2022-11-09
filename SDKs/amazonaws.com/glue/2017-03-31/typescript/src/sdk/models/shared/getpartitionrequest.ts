import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPartitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=PartitionValues" })
  partitionValues: string[];

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
