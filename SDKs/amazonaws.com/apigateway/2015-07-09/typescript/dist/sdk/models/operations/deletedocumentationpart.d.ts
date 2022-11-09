import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteDocumentationPartPathParams extends SpeakeasyBase {
    partId: string;
    restapiId: string;
}
export declare class DeleteDocumentationPartHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDocumentationPartRequest extends SpeakeasyBase {
    pathParams: DeleteDocumentationPartPathParams;
    headers: DeleteDocumentationPartHeaders;
}
export declare class DeleteDocumentationPartResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
