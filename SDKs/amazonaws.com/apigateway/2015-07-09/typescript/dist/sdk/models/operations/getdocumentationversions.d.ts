import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentationVersionsPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class GetDocumentationVersionsQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetDocumentationVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDocumentationVersionsRequest extends SpeakeasyBase {
    pathParams: GetDocumentationVersionsPathParams;
    queryParams: GetDocumentationVersionsQueryParams;
    headers: GetDocumentationVersionsHeaders;
}
export declare class GetDocumentationVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    documentationVersions?: shared.DocumentationVersions;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
