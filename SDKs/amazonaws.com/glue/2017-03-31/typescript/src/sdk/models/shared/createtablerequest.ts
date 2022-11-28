import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionIndex } from "./partitionindex";
import { TableInput } from "./tableinput";



export class CreateTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionIndexes", elemType: PartitionIndex })
  partitionIndexes?: PartitionIndex[];

  @SpeakeasyMetadata({ data: "json, name=TableInput" })
  tableInput: TableInput;
}
