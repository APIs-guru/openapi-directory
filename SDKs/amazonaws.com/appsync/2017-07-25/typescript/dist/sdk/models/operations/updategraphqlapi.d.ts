import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGraphqlApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class UpdateGraphqlApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateGraphqlApiRequestBodyAuthenticationTypeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT",
    AwsLambda = "AWS_LAMBDA"
}
/**
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
export declare class UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig extends SpeakeasyBase {
    authorizerResultTtlInSeconds?: number;
    authorizerUri?: string;
    identityValidationExpression?: string;
}
/**
 * The CloudWatch Logs configuration.
**/
export declare class UpdateGraphqlApiRequestBodyLogConfig extends SpeakeasyBase {
    cloudWatchLogsRoleArn?: string;
    excludeVerboseContent?: boolean;
    fieldLogLevel?: shared.FieldLogLevelEnum;
}
/**
 * Describes an OpenID Connect configuration.
**/
export declare class UpdateGraphqlApiRequestBodyOpenIdConnectConfig extends SpeakeasyBase {
    authTtl?: number;
    clientId?: string;
    iatTtl?: number;
    issuer?: string;
}
/**
 * Describes an Amazon Cognito user pool configuration.
**/
export declare class UpdateGraphqlApiRequestBodyUserPoolConfig extends SpeakeasyBase {
    appIdClientRegex?: string;
    awsRegion?: string;
    defaultAction?: shared.DefaultActionEnum;
    userPoolId?: string;
}
export declare class UpdateGraphqlApiRequestBody extends SpeakeasyBase {
    additionalAuthenticationProviders?: shared.AdditionalAuthenticationProvider[];
    authenticationType?: UpdateGraphqlApiRequestBodyAuthenticationTypeEnum;
    lambdaAuthorizerConfig?: UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig;
    logConfig?: UpdateGraphqlApiRequestBodyLogConfig;
    name: string;
    openIdConnectConfig?: UpdateGraphqlApiRequestBodyOpenIdConnectConfig;
    userPoolConfig?: UpdateGraphqlApiRequestBodyUserPoolConfig;
    xrayEnabled?: boolean;
}
export declare class UpdateGraphqlApiRequest extends SpeakeasyBase {
    pathParams: UpdateGraphqlApiPathParams;
    headers: UpdateGraphqlApiHeaders;
    request: UpdateGraphqlApiRequestBody;
}
export declare class UpdateGraphqlApiResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateGraphqlApiResponse?: shared.UpdateGraphqlApiResponse;
}
