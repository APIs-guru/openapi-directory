import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRoutePathParams extends SpeakeasyBase {
    apiId: string;
    routeId: string;
}
export declare class DeleteRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRouteRequest extends SpeakeasyBase {
    pathParams: DeleteRoutePathParams;
    headers: DeleteRouteHeaders;
}
export declare class DeleteRouteResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
