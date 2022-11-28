import { SpeakeasyBase } from "../../../internal/utils";
export declare class BatchDeleteTableVersionRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    tableName: string;
    versionIds: string[];
}
