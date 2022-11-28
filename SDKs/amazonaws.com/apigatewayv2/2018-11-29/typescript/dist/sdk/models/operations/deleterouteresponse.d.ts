import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRouteResponsePathParams extends SpeakeasyBase {
    apiId: string;
    routeId: string;
    routeResponseId: string;
}
export declare class DeleteRouteResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRouteResponseRequest extends SpeakeasyBase {
    pathParams: DeleteRouteResponsePathParams;
    headers: DeleteRouteResponseHeaders;
}
export declare class DeleteRouteResponseResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
