import { SpeakeasyBase } from "../../../internal/utils";
import { ReportStateTypeEnum } from "./reportstatetypeenum";
/**
 * Contains the response to a successful <a>GenerateCredentialReport</a> request.
**/
export declare class GenerateCredentialReportResponse extends SpeakeasyBase {
    description?: string;
    state?: ReportStateTypeEnum;
}
