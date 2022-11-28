import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAuthorizerPathParams extends SpeakeasyBase {
    apiId: string;
    authorizerId: string;
}
export declare class UpdateAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateAuthorizerRequestBodyAuthorizerTypeEnum {
    Request = "REQUEST",
    Jwt = "JWT"
}
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
export declare class UpdateAuthorizerRequestBodyJwtConfiguration extends SpeakeasyBase {
    audience?: string[];
    issuer?: string;
}
export declare class UpdateAuthorizerRequestBody extends SpeakeasyBase {
    authorizerCredentialsArn?: string;
    authorizerPayloadFormatVersion?: string;
    authorizerResultTtlInSeconds?: number;
    authorizerType?: UpdateAuthorizerRequestBodyAuthorizerTypeEnum;
    authorizerUri?: string;
    enableSimpleResponses?: boolean;
    identitySource?: string[];
    identityValidationExpression?: string;
    jwtConfiguration?: UpdateAuthorizerRequestBodyJwtConfiguration;
    name?: string;
}
export declare class UpdateAuthorizerRequest extends SpeakeasyBase {
    pathParams: UpdateAuthorizerPathParams;
    headers: UpdateAuthorizerHeaders;
    request: UpdateAuthorizerRequestBody;
}
export declare class UpdateAuthorizerResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateAuthorizerResponse?: shared.UpdateAuthorizerResponse;
}
