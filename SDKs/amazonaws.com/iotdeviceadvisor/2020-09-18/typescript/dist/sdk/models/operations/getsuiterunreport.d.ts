import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSuiteRunReportPathParams extends SpeakeasyBase {
    suiteDefinitionId: string;
    suiteRunId: string;
}
export declare class GetSuiteRunReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSuiteRunReportRequest extends SpeakeasyBase {
    pathParams: GetSuiteRunReportPathParams;
    headers: GetSuiteRunReportHeaders;
}
export declare class GetSuiteRunReportResponse extends SpeakeasyBase {
    contentType: string;
    getSuiteRunReportResponse?: shared.GetSuiteRunReportResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
