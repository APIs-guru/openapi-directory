import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
/**
 * An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
**/
export declare class ImportTask extends SpeakeasyBase {
    applicationImportFailure?: number;
    applicationImportSuccess?: number;
    clientRequestToken?: string;
    errorsAndFailedEntriesZip?: string;
    importCompletionTime?: Date;
    importDeletedTime?: Date;
    importRequestTime?: Date;
    importTaskId?: string;
    importUrl?: string;
    name?: string;
    serverImportFailure?: number;
    serverImportSuccess?: number;
    status?: ImportStatusEnum;
}
