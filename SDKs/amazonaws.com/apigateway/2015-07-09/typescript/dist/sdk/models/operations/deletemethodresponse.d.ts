import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMethodResponsePathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
    statusCode: string;
}
export declare class DeleteMethodResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMethodResponseRequest extends SpeakeasyBase {
    pathParams: DeleteMethodResponsePathParams;
    headers: DeleteMethodResponseHeaders;
}
export declare class DeleteMethodResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
