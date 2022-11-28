import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionInput } from "./partitioninput";
export declare class BatchCreatePartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    partitionInputList: PartitionInput[];
    tableName: string;
}
