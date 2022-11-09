import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteDocumentationVersionPathParams extends SpeakeasyBase {
    docVersion: string;
    restapiId: string;
}
export declare class DeleteDocumentationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDocumentationVersionRequest extends SpeakeasyBase {
    pathParams: DeleteDocumentationVersionPathParams;
    headers: DeleteDocumentationVersionHeaders;
}
export declare class DeleteDocumentationVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
