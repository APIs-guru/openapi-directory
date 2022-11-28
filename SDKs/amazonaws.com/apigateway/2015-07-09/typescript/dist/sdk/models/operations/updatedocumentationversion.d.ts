import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDocumentationVersionPathParams extends SpeakeasyBase {
    docVersion: string;
    restapiId: string;
}
export declare class UpdateDocumentationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDocumentationVersionRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateDocumentationVersionRequest extends SpeakeasyBase {
    pathParams: UpdateDocumentationVersionPathParams;
    headers: UpdateDocumentationVersionHeaders;
    request: UpdateDocumentationVersionRequestBody;
}
export declare class UpdateDocumentationVersionResponse extends SpeakeasyBase {
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
