import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionInput } from "./partitioninput";
export declare class CreatePartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    partitionInput: PartitionInput;
    tableName: string;
}
