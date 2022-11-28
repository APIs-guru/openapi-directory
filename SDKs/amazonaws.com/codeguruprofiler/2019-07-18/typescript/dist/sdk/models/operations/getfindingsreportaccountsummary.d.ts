import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFindingsReportAccountSummaryQueryParams extends SpeakeasyBase {
    dailyReportsOnly?: boolean;
    maxResults?: number;
    nextToken?: string;
}
export declare class GetFindingsReportAccountSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFindingsReportAccountSummaryRequest extends SpeakeasyBase {
    queryParams: GetFindingsReportAccountSummaryQueryParams;
    headers: GetFindingsReportAccountSummaryHeaders;
}
export declare class GetFindingsReportAccountSummaryResponse extends SpeakeasyBase {
    contentType: string;
    getFindingsReportAccountSummaryResponse?: shared.GetFindingsReportAccountSummaryResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
