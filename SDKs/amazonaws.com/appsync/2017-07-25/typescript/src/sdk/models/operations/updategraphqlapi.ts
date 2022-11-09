import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGraphqlApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class UpdateGraphqlApiHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum UpdateGraphqlApiRequestBodyAuthenticationTypeEnum {
    ApiKey = "API_KEY"
,    AwsIam = "AWS_IAM"
,    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS"
,    OpenidConnect = "OPENID_CONNECT"
,    AwsLambda = "AWS_LAMBDA"
}


// UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig
/** 
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
export class UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @Metadata({ data: "json, name=authorizerUri" })
  authorizerUri?: string;

  @Metadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;
}


// UpdateGraphqlApiRequestBodyLogConfig
/** 
 * The CloudWatch Logs configuration.
**/
export class UpdateGraphqlApiRequestBodyLogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn?: string;

  @Metadata({ data: "json, name=excludeVerboseContent" })
  excludeVerboseContent?: boolean;

  @Metadata({ data: "json, name=fieldLogLevel" })
  fieldLogLevel?: shared.FieldLogLevelEnum;
}


// UpdateGraphqlApiRequestBodyOpenIdConnectConfig
/** 
 * Describes an OpenID Connect configuration.
**/
export class UpdateGraphqlApiRequestBodyOpenIdConnectConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authTTL" })
  authTtl?: number;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=iatTTL" })
  iatTtl?: number;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;
}


// UpdateGraphqlApiRequestBodyUserPoolConfig
/** 
 * Describes an Amazon Cognito user pool configuration.
**/
export class UpdateGraphqlApiRequestBodyUserPoolConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=appIdClientRegex" })
  appIdClientRegex?: string;

  @Metadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=defaultAction" })
  defaultAction?: shared.DefaultActionEnum;

  @Metadata({ data: "json, name=userPoolId" })
  userPoolId?: string;
}


export class UpdateGraphqlApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalAuthenticationProviders", elemType: shared.AdditionalAuthenticationProvider })
  additionalAuthenticationProviders?: shared.AdditionalAuthenticationProvider[];

  @Metadata({ data: "json, name=authenticationType" })
  authenticationType?: UpdateGraphqlApiRequestBodyAuthenticationTypeEnum;

  @Metadata({ data: "json, name=lambdaAuthorizerConfig" })
  lambdaAuthorizerConfig?: UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig;

  @Metadata({ data: "json, name=logConfig" })
  logConfig?: UpdateGraphqlApiRequestBodyLogConfig;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=openIDConnectConfig" })
  openIdConnectConfig?: UpdateGraphqlApiRequestBodyOpenIdConnectConfig;

  @Metadata({ data: "json, name=userPoolConfig" })
  userPoolConfig?: UpdateGraphqlApiRequestBodyUserPoolConfig;

  @Metadata({ data: "json, name=xrayEnabled" })
  xrayEnabled?: boolean;
}


export class UpdateGraphqlApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGraphqlApiPathParams;

  @Metadata()
  headers: UpdateGraphqlApiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGraphqlApiRequestBody;
}


export class UpdateGraphqlApiResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateGraphqlApiResponse?: shared.UpdateGraphqlApiResponse;
}
