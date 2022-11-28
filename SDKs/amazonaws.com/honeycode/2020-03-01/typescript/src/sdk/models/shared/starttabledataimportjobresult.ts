import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDataImportJobStatusEnum } from "./tabledataimportjobstatusenum";



export class StartTableDataImportJobResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=jobStatus" })
  jobStatus: TableDataImportJobStatusEnum;
}
