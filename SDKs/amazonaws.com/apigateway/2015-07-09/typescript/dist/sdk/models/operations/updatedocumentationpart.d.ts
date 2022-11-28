import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDocumentationPartPathParams extends SpeakeasyBase {
    partId: string;
    restapiId: string;
}
export declare class UpdateDocumentationPartHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDocumentationPartRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateDocumentationPartRequest extends SpeakeasyBase {
    pathParams: UpdateDocumentationPartPathParams;
    headers: UpdateDocumentationPartHeaders;
    request: UpdateDocumentationPartRequestBody;
}
export declare class UpdateDocumentationPartResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    documentationPart?: shared.DocumentationPart;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
