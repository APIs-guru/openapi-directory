import { SpeakeasyBase } from "../../../internal/utils";
export declare class BatchDeleteTableRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    tablesToDelete: string[];
}
