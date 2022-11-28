import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionInput } from "./partitioninput";



export class BatchCreatePartitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionInputList", elemType: PartitionInput })
  partitionInputList: PartitionInput[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
