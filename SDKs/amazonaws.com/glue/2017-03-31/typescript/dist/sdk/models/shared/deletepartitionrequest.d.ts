import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    partitionValues: string[];
    tableName: string;
}
