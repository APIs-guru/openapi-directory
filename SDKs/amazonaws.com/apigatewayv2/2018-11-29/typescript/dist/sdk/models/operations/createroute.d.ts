import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRoutePathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateRouteRequestBodyAuthorizationTypeEnum {
    None = "NONE",
    AwsIam = "AWS_IAM",
    Custom = "CUSTOM",
    Jwt = "JWT"
}
export declare class CreateRouteRequestBody extends SpeakeasyBase {
    apiKeyRequired?: boolean;
    authorizationScopes?: string[];
    authorizationType?: CreateRouteRequestBodyAuthorizationTypeEnum;
    authorizerId?: string;
    modelSelectionExpression?: string;
    operationName?: string;
    requestModels?: Map<string, string>;
    requestParameters?: Map<string, shared.ParameterConstraints>;
    routeKey: string;
    routeResponseSelectionExpression?: string;
    target?: string;
}
export declare class CreateRouteRequest extends SpeakeasyBase {
    pathParams: CreateRoutePathParams;
    headers: CreateRouteHeaders;
    request: CreateRouteRequestBody;
}
export declare class CreateRouteResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createRouteResult?: shared.CreateRouteResult;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
