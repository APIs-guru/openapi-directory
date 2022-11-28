import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetColumnStatisticsForTableRequest extends SpeakeasyBase {
    catalogId?: string;
    columnNames: string[];
    databaseName: string;
    tableName: string;
}
