import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateGraphqlApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateGraphqlApiRequestBodyAuthenticationTypeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT",
    AwsLambda = "AWS_LAMBDA"
}
/**
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
export declare class CreateGraphqlApiRequestBodyLambdaAuthorizerConfig extends SpeakeasyBase {
    authorizerResultTtlInSeconds?: number;
    authorizerUri?: string;
    identityValidationExpression?: string;
}
/**
 * The CloudWatch Logs configuration.
**/
export declare class CreateGraphqlApiRequestBodyLogConfig extends SpeakeasyBase {
    cloudWatchLogsRoleArn?: string;
    excludeVerboseContent?: boolean;
    fieldLogLevel?: shared.FieldLogLevelEnum;
}
/**
 * Describes an OpenID Connect configuration.
**/
export declare class CreateGraphqlApiRequestBodyOpenIdConnectConfig extends SpeakeasyBase {
    authTtl?: number;
    clientId?: string;
    iatTtl?: number;
    issuer?: string;
}
/**
 * Describes an Amazon Cognito user pool configuration.
**/
export declare class CreateGraphqlApiRequestBodyUserPoolConfig extends SpeakeasyBase {
    appIdClientRegex?: string;
    awsRegion?: string;
    defaultAction?: shared.DefaultActionEnum;
    userPoolId?: string;
}
export declare class CreateGraphqlApiRequestBody extends SpeakeasyBase {
    additionalAuthenticationProviders?: shared.AdditionalAuthenticationProvider[];
    authenticationType: CreateGraphqlApiRequestBodyAuthenticationTypeEnum;
    lambdaAuthorizerConfig?: CreateGraphqlApiRequestBodyLambdaAuthorizerConfig;
    logConfig?: CreateGraphqlApiRequestBodyLogConfig;
    name: string;
    openIdConnectConfig?: CreateGraphqlApiRequestBodyOpenIdConnectConfig;
    tags?: Map<string, string>;
    userPoolConfig?: CreateGraphqlApiRequestBodyUserPoolConfig;
    xrayEnabled?: boolean;
}
export declare class CreateGraphqlApiRequest extends SpeakeasyBase {
    headers: CreateGraphqlApiHeaders;
    request: CreateGraphqlApiRequestBody;
}
export declare class CreateGraphqlApiResponse extends SpeakeasyBase {
    apiLimitExceededException?: any;
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createGraphqlApiResponse?: shared.CreateGraphqlApiResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
