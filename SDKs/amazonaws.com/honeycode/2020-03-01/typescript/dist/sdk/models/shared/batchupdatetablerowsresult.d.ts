import { SpeakeasyBase } from "../../../internal/utils";
import { FailedBatchItem } from "./failedbatchitem";
export declare class BatchUpdateTableRowsResult extends SpeakeasyBase {
    failedBatchItems?: FailedBatchItem[];
    workbookCursor: number;
}
