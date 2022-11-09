import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TableDataImportJobMetadata } from "./tabledataimportjobmetadata";
import { TableDataImportJobStatusEnum } from "./tabledataimportjobstatusenum";
export declare class DescribeTableDataImportJobResult extends SpeakeasyBase {
    jobMetadata: TableDataImportJobMetadata;
    jobStatus: TableDataImportJobStatusEnum;
    message: string;
}
