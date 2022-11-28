import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFormatTypeEnum } from "./reportformattypeenum";
/**
 * Contains the response to a successful <a>GetCredentialReport</a> request.
**/
export declare class GetCredentialReportResponse extends SpeakeasyBase {
    content?: string;
    generatedTime?: Date;
    reportFormat?: ReportFormatTypeEnum;
}
