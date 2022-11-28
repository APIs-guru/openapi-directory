import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnalyzedResourceQueryParams extends SpeakeasyBase {
    analyzerArn: string;
    resourceArn: string;
}
export declare class GetAnalyzedResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAnalyzedResourceRequest extends SpeakeasyBase {
    queryParams: GetAnalyzedResourceQueryParams;
    headers: GetAnalyzedResourceHeaders;
}
export declare class GetAnalyzedResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAnalyzedResourceResponse?: shared.GetAnalyzedResourceResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
