import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartitionValueList } from "./partitionvaluelist";


export class BatchGetPartitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=PartitionsToGet", elemType: shared.PartitionValueList })
  partitionsToGet: PartitionValueList[];

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
