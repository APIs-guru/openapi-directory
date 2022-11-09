import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartitionInput } from "./partitioninput";


export class BatchCreatePartitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=PartitionInputList", elemType: shared.PartitionInput })
  partitionInputList: PartitionInput[];

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
