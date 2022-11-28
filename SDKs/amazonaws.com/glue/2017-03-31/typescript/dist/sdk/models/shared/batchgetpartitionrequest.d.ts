import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionValueList } from "./partitionvaluelist";
export declare class BatchGetPartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    partitionsToGet: PartitionValueList[];
    tableName: string;
}
