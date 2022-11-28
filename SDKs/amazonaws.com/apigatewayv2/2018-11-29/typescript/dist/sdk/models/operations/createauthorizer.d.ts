import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAuthorizerPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateAuthorizerRequestBodyAuthorizerTypeEnum {
    Request = "REQUEST",
    Jwt = "JWT"
}
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
export declare class CreateAuthorizerRequestBodyJwtConfiguration extends SpeakeasyBase {
    audience?: string[];
    issuer?: string;
}
export declare class CreateAuthorizerRequestBody extends SpeakeasyBase {
    authorizerCredentialsArn?: string;
    authorizerPayloadFormatVersion?: string;
    authorizerResultTtlInSeconds?: number;
    authorizerType: CreateAuthorizerRequestBodyAuthorizerTypeEnum;
    authorizerUri?: string;
    enableSimpleResponses?: boolean;
    identitySource: string[];
    identityValidationExpression?: string;
    jwtConfiguration?: CreateAuthorizerRequestBodyJwtConfiguration;
    name: string;
}
export declare class CreateAuthorizerRequest extends SpeakeasyBase {
    pathParams: CreateAuthorizerPathParams;
    headers: CreateAuthorizerHeaders;
    request: CreateAuthorizerRequestBody;
}
export declare class CreateAuthorizerResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createAuthorizerResponse?: shared.CreateAuthorizerResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
