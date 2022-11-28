import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteColumnStatisticsForPartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    columnName: string;
    databaseName: string;
    partitionValues: string[];
    tableName: string;
}
