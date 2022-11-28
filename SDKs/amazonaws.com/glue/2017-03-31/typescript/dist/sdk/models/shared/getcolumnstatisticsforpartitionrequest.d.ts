import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetColumnStatisticsForPartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    columnNames: string[];
    databaseName: string;
    partitionValues: string[];
    tableName: string;
}
