import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionIndex } from "./partitionindex";
export declare class CreatePartitionIndexRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    partitionIndex: PartitionIndex;
    tableName: string;
}
