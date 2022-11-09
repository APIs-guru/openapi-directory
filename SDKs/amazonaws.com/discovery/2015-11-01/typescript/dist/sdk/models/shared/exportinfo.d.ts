import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportStatusEnum } from "./exportstatusenum";
/**
 * Information regarding the export status of discovered data. The value is an array of objects.
**/
export declare class ExportInfo extends SpeakeasyBase {
    configurationsDownloadUrl?: string;
    exportId: string;
    exportRequestTime: Date;
    exportStatus: ExportStatusEnum;
    isTruncated?: boolean;
    requestedEndTime?: Date;
    requestedStartTime?: Date;
    statusMessage: string;
}
