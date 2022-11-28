import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportDataSource } from "./importdatasource";
import { ImportOptions } from "./importoptions";
import { ImportJobSubmitter } from "./importjobsubmitter";



// TableDataImportJobMetadata
/** 
 * The metadata associated with the table data import job that was submitted.
**/
export class TableDataImportJobMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource: ImportDataSource;

  @SpeakeasyMetadata({ data: "json, name=importOptions" })
  importOptions: ImportOptions;

  @SpeakeasyMetadata({ data: "json, name=submitTime" })
  submitTime: Date;

  @SpeakeasyMetadata({ data: "json, name=submitter" })
  submitter: ImportJobSubmitter;
}
