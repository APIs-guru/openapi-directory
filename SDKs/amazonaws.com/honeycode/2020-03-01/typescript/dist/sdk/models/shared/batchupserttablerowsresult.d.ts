import { SpeakeasyBase } from "../../../internal/utils";
import { FailedBatchItem } from "./failedbatchitem";
import { UpsertRowsResult } from "./upsertrowsresult";
export declare class BatchUpsertTableRowsResult extends SpeakeasyBase {
    failedBatchItems?: FailedBatchItem[];
    rows: Map<string, UpsertRowsResult>;
    workbookCursor: number;
}
