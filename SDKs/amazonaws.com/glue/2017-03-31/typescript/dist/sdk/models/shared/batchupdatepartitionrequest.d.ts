import { SpeakeasyBase } from "../../../internal/utils";
import { BatchUpdatePartitionRequestEntry } from "./batchupdatepartitionrequestentry";
export declare class BatchUpdatePartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    entries: BatchUpdatePartitionRequestEntry[];
    tableName: string;
}
