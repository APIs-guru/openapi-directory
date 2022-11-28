import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionInput } from "./partitioninput";
export declare class UpdatePartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    partitionInput: PartitionInput;
    partitionValueList: string[];
    tableName: string;
}
