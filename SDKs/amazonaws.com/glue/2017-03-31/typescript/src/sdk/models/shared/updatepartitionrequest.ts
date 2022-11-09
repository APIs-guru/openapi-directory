import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PartitionInput } from "./partitioninput";


export class UpdatePartitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=PartitionInput" })
  partitionInput: PartitionInput;

  @Metadata({ data: "json, name=PartitionValueList" })
  partitionValueList: string[];

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
