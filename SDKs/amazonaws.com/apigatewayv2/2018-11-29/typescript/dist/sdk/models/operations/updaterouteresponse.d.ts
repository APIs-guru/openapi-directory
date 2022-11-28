import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRouteResponsePathParams extends SpeakeasyBase {
    apiId: string;
    routeId: string;
    routeResponseId: string;
}
export declare class UpdateRouteResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRouteResponseRequestBody extends SpeakeasyBase {
    modelSelectionExpression?: string;
    responseModels?: Map<string, string>;
    responseParameters?: Map<string, shared.ParameterConstraints>;
    routeResponseKey?: string;
}
export declare class UpdateRouteResponseRequest extends SpeakeasyBase {
    pathParams: UpdateRouteResponsePathParams;
    headers: UpdateRouteResponseHeaders;
    request: UpdateRouteResponseRequestBody;
}
export declare class UpdateRouteResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateRouteResponseResponse?: shared.UpdateRouteResponseResponse;
}
