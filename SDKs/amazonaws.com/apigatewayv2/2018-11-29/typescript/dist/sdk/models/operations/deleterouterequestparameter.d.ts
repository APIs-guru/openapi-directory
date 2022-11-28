import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRouteRequestParameterPathParams extends SpeakeasyBase {
    apiId: string;
    requestParameterKey: string;
    routeId: string;
}
export declare class DeleteRouteRequestParameterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRouteRequestParameterRequest extends SpeakeasyBase {
    pathParams: DeleteRouteRequestParameterPathParams;
    headers: DeleteRouteRequestParameterHeaders;
}
export declare class DeleteRouteRequestParameterResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
