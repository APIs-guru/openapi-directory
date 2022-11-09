import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableDataImportJobMetadata } from "./tabledataimportjobmetadata";
import { TableDataImportJobStatusEnum } from "./tabledataimportjobstatusenum";


export class DescribeTableDataImportJobResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobMetadata" })
  jobMetadata: TableDataImportJobMetadata;

  @Metadata({ data: "json, name=jobStatus" })
  jobStatus: TableDataImportJobStatusEnum;

  @Metadata({ data: "json, name=message" })
  message: string;
}
