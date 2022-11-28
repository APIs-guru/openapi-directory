import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMethodPathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
}
export declare class DeleteMethodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMethodRequest extends SpeakeasyBase {
    pathParams: DeleteMethodPathParams;
    headers: DeleteMethodHeaders;
}
export declare class DeleteMethodResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
