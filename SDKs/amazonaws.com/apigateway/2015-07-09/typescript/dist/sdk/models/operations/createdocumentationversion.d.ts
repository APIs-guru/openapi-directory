import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDocumentationVersionPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class CreateDocumentationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDocumentationVersionRequestBody extends SpeakeasyBase {
    description?: string;
    documentationVersion: string;
    stageName?: string;
}
export declare class CreateDocumentationVersionRequest extends SpeakeasyBase {
    pathParams: CreateDocumentationVersionPathParams;
    headers: CreateDocumentationVersionHeaders;
    request: CreateDocumentationVersionRequestBody;
}
export declare class CreateDocumentationVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    documentationVersion?: shared.DocumentationVersion;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
