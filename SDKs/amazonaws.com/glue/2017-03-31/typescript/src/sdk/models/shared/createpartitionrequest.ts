import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionInput } from "./partitioninput";



export class CreatePartitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionInput" })
  partitionInput: PartitionInput;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
