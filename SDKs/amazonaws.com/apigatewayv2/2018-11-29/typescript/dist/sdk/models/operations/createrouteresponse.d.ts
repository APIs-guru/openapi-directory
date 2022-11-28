import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRouteResponsePathParams extends SpeakeasyBase {
    apiId: string;
    routeId: string;
}
export declare class CreateRouteResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRouteResponseRequestBody extends SpeakeasyBase {
    modelSelectionExpression?: string;
    responseModels?: Map<string, string>;
    responseParameters?: Map<string, shared.ParameterConstraints>;
    routeResponseKey: string;
}
export declare class CreateRouteResponseRequest extends SpeakeasyBase {
    pathParams: CreateRouteResponsePathParams;
    headers: CreateRouteResponseHeaders;
    request: CreateRouteResponseRequestBody;
}
export declare class CreateRouteResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createRouteResponseResponse?: shared.CreateRouteResponseResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
