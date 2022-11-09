import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAuthorizerPathParams extends SpeakeasyBase {
    restapiId: string;
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
export declare enum CreateAuthorizerRequestBodyTypeEnum {
    Token = "TOKEN",
    Request = "REQUEST",
    CognitoUserPools = "COGNITO_USER_POOLS"
}
export declare class CreateAuthorizerRequestBody extends SpeakeasyBase {
    authType?: string;
    authorizerCredentials?: string;
    authorizerResultTtlInSeconds?: number;
    authorizerUri?: string;
    identitySource?: string;
    identityValidationExpression?: string;
    name: string;
    providerArNs?: string[];
    type: CreateAuthorizerRequestBodyTypeEnum;
}
export declare class CreateAuthorizerRequest extends SpeakeasyBase {
    pathParams: CreateAuthorizerPathParams;
    headers: CreateAuthorizerHeaders;
    request: CreateAuthorizerRequestBody;
}
export declare class CreateAuthorizerResponse extends SpeakeasyBase {
    authorizer?: shared.Authorizer;
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
