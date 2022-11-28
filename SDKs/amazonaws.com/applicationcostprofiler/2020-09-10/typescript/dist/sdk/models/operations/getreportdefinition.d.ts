import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportDefinitionPathParams extends SpeakeasyBase {
    reportId: string;
}
export declare class GetReportDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReportDefinitionRequest extends SpeakeasyBase {
    pathParams: GetReportDefinitionPathParams;
    headers: GetReportDefinitionHeaders;
}
export declare class GetReportDefinitionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getReportDefinitionResult?: shared.GetReportDefinitionResult;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
