import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionValueList } from "./partitionvaluelist";
export declare class BatchDeletePartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    partitionsToDelete: PartitionValueList[];
    tableName: string;
}
