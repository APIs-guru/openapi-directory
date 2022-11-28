import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableDataImportJobMetadata } from "./tabledataimportjobmetadata";
import { TableDataImportJobStatusEnum } from "./tabledataimportjobstatusenum";



export class DescribeTableDataImportJobResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobMetadata" })
  jobMetadata: TableDataImportJobMetadata;

  @SpeakeasyMetadata({ data: "json, name=jobStatus" })
  jobStatus: TableDataImportJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
