import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FailedBatchItem } from "./failedbatchitem";
export declare class BatchCreateTableRowsResult extends SpeakeasyBase {
    createdRows: Map<string, string>;
    failedBatchItems?: FailedBatchItem[];
    workbookCursor: number;
}
