import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportDataSource } from "./importdatasource";
import { ImportOptions } from "./importoptions";
import { ImportJobSubmitter } from "./importjobsubmitter";
/**
 * The metadata associated with the table data import job that was submitted.
**/
export declare class TableDataImportJobMetadata extends SpeakeasyBase {
    dataSource: ImportDataSource;
    importOptions: ImportOptions;
    submitTime: Date;
    submitter: ImportJobSubmitter;
}
