import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccessPreviewPathParams extends SpeakeasyBase {
    accessPreviewId: string;
}
export declare class GetAccessPreviewQueryParams extends SpeakeasyBase {
    analyzerArn: string;
}
export declare class GetAccessPreviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAccessPreviewRequest extends SpeakeasyBase {
    pathParams: GetAccessPreviewPathParams;
    queryParams: GetAccessPreviewQueryParams;
    headers: GetAccessPreviewHeaders;
}
export declare class GetAccessPreviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAccessPreviewResponse?: shared.GetAccessPreviewResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
