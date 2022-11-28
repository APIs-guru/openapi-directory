import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteResourcePathParams extends SpeakeasyBase {
    resourceId: string;
    restapiId: string;
}
export declare class DeleteResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResourceRequest extends SpeakeasyBase {
    pathParams: DeleteResourcePathParams;
    headers: DeleteResourceHeaders;
}
export declare class DeleteResourceResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
