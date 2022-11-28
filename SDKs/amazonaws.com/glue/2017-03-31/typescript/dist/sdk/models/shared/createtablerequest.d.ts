import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionIndex } from "./partitionindex";
import { TableInput } from "./tableinput";
export declare class CreateTableRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    partitionIndexes?: PartitionIndex[];
    tableInput: TableInput;
}
