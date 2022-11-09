import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartitionIndex } from "./partitionindex";
import { TableInput } from "./tableinput";


export class CreateTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=PartitionIndexes", elemType: shared.PartitionIndex })
  partitionIndexes?: PartitionIndex[];

  @Metadata({ data: "json, name=TableInput" })
  tableInput: TableInput;
}
