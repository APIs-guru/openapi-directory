import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    partitionValues: string[];
    tableName: string;
}
