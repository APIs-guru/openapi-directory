import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDeleteImportDataErrorCodeEnum } from "./batchdeleteimportdataerrorcodeenum";
/**
 * Error messages returned for each import task that you deleted as a response for this command.
**/
export declare class BatchDeleteImportDataError extends SpeakeasyBase {
    errorCode?: BatchDeleteImportDataErrorCodeEnum;
    errorDescription?: string;
    importTaskId?: string;
}
