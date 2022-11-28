import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentationPartsPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare enum GetDocumentationPartsLocationStatusEnum {
    Documented = "DOCUMENTED",
    Undocumented = "UNDOCUMENTED"
}
export declare enum GetDocumentationPartsTypeEnum {
    Api = "API",
    Authorizer = "AUTHORIZER",
    Model = "MODEL",
    Resource = "RESOURCE",
    Method = "METHOD",
    PathParameter = "PATH_PARAMETER",
    QueryParameter = "QUERY_PARAMETER",
    RequestHeader = "REQUEST_HEADER",
    RequestBody = "REQUEST_BODY",
    Response = "RESPONSE",
    ResponseHeader = "RESPONSE_HEADER",
    ResponseBody = "RESPONSE_BODY"
}
export declare class GetDocumentationPartsQueryParams extends SpeakeasyBase {
    limit?: number;
    locationStatus?: GetDocumentationPartsLocationStatusEnum;
    name?: string;
    path?: string;
    position?: string;
    type?: GetDocumentationPartsTypeEnum;
}
export declare class GetDocumentationPartsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDocumentationPartsRequest extends SpeakeasyBase {
    pathParams: GetDocumentationPartsPathParams;
    queryParams: GetDocumentationPartsQueryParams;
    headers: GetDocumentationPartsHeaders;
}
export declare class GetDocumentationPartsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    documentationParts?: shared.DocumentationParts;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
