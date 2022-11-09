import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableDataImportJobStatusEnum } from "./tabledataimportjobstatusenum";


export class StartTableDataImportJobResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=jobStatus" })
  jobStatus: TableDataImportJobStatusEnum;
}
