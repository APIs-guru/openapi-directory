import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalTable } from "./globaltable";
export declare class ListGlobalTablesOutput extends SpeakeasyBase {
    globalTables?: GlobalTable[];
    lastEvaluatedGlobalTableName?: string;
}
