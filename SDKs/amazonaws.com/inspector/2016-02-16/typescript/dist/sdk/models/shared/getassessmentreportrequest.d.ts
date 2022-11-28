import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFileFormatEnum } from "./reportfileformatenum";
import { ReportTypeEnum } from "./reporttypeenum";
export declare class GetAssessmentReportRequest extends SpeakeasyBase {
    assessmentRunArn: string;
    reportFileFormat: ReportFileFormatEnum;
    reportType: ReportTypeEnum;
}
