import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoutePathParams extends SpeakeasyBase {
    apiId: string;
    routeId: string;
}
export declare class UpdateRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateRouteRequestBodyAuthorizationTypeEnum {
    None = "NONE",
    AwsIam = "AWS_IAM",
    Custom = "CUSTOM",
    Jwt = "JWT"
}
export declare class UpdateRouteRequestBody extends SpeakeasyBase {
    apiKeyRequired?: boolean;
    authorizationScopes?: string[];
    authorizationType?: UpdateRouteRequestBodyAuthorizationTypeEnum;
    authorizerId?: string;
    modelSelectionExpression?: string;
    operationName?: string;
    requestModels?: Map<string, string>;
    requestParameters?: Map<string, shared.ParameterConstraints>;
    routeKey?: string;
    routeResponseSelectionExpression?: string;
    target?: string;
}
export declare class UpdateRouteRequest extends SpeakeasyBase {
    pathParams: UpdateRoutePathParams;
    headers: UpdateRouteHeaders;
    request: UpdateRouteRequestBody;
}
export declare class UpdateRouteResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateRouteResult?: shared.UpdateRouteResult;
}
