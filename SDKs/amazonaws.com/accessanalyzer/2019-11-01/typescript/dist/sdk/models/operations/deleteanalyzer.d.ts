import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAnalyzerPathParams extends SpeakeasyBase {
    analyzerName: string;
}
export declare class DeleteAnalyzerQueryParams extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DeleteAnalyzerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAnalyzerRequest extends SpeakeasyBase {
    pathParams: DeleteAnalyzerPathParams;
    queryParams: DeleteAnalyzerQueryParams;
    headers: DeleteAnalyzerHeaders;
}
export declare class DeleteAnalyzerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
