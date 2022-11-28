import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRouteSettingsPathParams extends SpeakeasyBase {
    apiId: string;
    routeKey: string;
    stageName: string;
}
export declare class DeleteRouteSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRouteSettingsRequest extends SpeakeasyBase {
    pathParams: DeleteRouteSettingsPathParams;
    headers: DeleteRouteSettingsHeaders;
}
export declare class DeleteRouteSettingsResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
