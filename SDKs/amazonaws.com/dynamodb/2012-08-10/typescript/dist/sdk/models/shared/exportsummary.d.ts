import { SpeakeasyBase } from "../../../internal/utils";
import { ExportStatusEnum } from "./exportstatusenum";
/**
 * Summary information about an export task.
**/
export declare class ExportSummary extends SpeakeasyBase {
    exportArn?: string;
    exportStatus?: ExportStatusEnum;
}
