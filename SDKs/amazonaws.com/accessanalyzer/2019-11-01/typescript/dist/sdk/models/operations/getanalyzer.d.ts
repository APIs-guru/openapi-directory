import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnalyzerPathParams extends SpeakeasyBase {
    analyzerName: string;
}
export declare class GetAnalyzerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAnalyzerRequest extends SpeakeasyBase {
    pathParams: GetAnalyzerPathParams;
    headers: GetAnalyzerHeaders;
}
export declare class GetAnalyzerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAnalyzerResponse?: shared.GetAnalyzerResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
