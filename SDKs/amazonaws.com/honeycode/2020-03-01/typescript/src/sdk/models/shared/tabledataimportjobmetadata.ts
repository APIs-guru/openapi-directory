import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportDataSource } from "./importdatasource";
import { ImportOptions } from "./importoptions";
import { ImportJobSubmitter } from "./importjobsubmitter";


// TableDataImportJobMetadata
/** 
 * The metadata associated with the table data import job that was submitted.
**/
export class TableDataImportJobMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSource" })
  dataSource: ImportDataSource;

  @Metadata({ data: "json, name=importOptions" })
  importOptions: ImportOptions;

  @Metadata({ data: "json, name=submitTime" })
  submitTime: Date;

  @Metadata({ data: "json, name=submitter" })
  submitter: ImportJobSubmitter;
}
