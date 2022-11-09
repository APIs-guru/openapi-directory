import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FailedBatchItem } from "./failedbatchitem";
export declare class BatchDeleteTableRowsResult extends SpeakeasyBase {
    failedBatchItems?: FailedBatchItem[];
    workbookCursor: number;
}
