import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGraphqlApiHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum CreateGraphqlApiRequestBodyAuthenticationTypeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT",
    AwsLambda = "AWS_LAMBDA"
}


// CreateGraphqlApiRequestBodyLambdaAuthorizerConfig
/** 
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
export class CreateGraphqlApiRequestBodyLambdaAuthorizerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=authorizerUri" })
  authorizerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;
}


// CreateGraphqlApiRequestBodyLogConfig
/** 
 * The CloudWatch Logs configuration.
**/
export class CreateGraphqlApiRequestBodyLogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=excludeVerboseContent" })
  excludeVerboseContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fieldLogLevel" })
  fieldLogLevel?: shared.FieldLogLevelEnum;
}


// CreateGraphqlApiRequestBodyOpenIdConnectConfig
/** 
 * Describes an OpenID Connect configuration.
**/
export class CreateGraphqlApiRequestBodyOpenIdConnectConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authTTL" })
  authTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=iatTTL" })
  iatTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;
}


// CreateGraphqlApiRequestBodyUserPoolConfig
/** 
 * Describes an Amazon Cognito user pool configuration.
**/
export class CreateGraphqlApiRequestBodyUserPoolConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appIdClientRegex" })
  appIdClientRegex?: string;

  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultAction" })
  defaultAction?: shared.DefaultActionEnum;

  @SpeakeasyMetadata({ data: "json, name=userPoolId" })
  userPoolId?: string;
}


export class CreateGraphqlApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAuthenticationProviders", elemType: shared.AdditionalAuthenticationProvider })
  additionalAuthenticationProviders?: shared.AdditionalAuthenticationProvider[];

  @SpeakeasyMetadata({ data: "json, name=authenticationType" })
  authenticationType: CreateGraphqlApiRequestBodyAuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lambdaAuthorizerConfig" })
  lambdaAuthorizerConfig?: CreateGraphqlApiRequestBodyLambdaAuthorizerConfig;

  @SpeakeasyMetadata({ data: "json, name=logConfig" })
  logConfig?: CreateGraphqlApiRequestBodyLogConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=openIDConnectConfig" })
  openIdConnectConfig?: CreateGraphqlApiRequestBodyOpenIdConnectConfig;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=userPoolConfig" })
  userPoolConfig?: CreateGraphqlApiRequestBodyUserPoolConfig;

  @SpeakeasyMetadata({ data: "json, name=xrayEnabled" })
  xrayEnabled?: boolean;
}


export class CreateGraphqlApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateGraphqlApiHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateGraphqlApiRequestBody;
}


export class CreateGraphqlApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiLimitExceededException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createGraphqlApiResponse?: shared.CreateGraphqlApiResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
