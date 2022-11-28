import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGraphqlApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class UpdateGraphqlApiHeaders extends SpeakeasyBase {
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

export enum UpdateGraphqlApiRequestBodyAuthenticationTypeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT",
    AwsLambda = "AWS_LAMBDA"
}


// UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig
/** 
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
export class UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=authorizerUri" })
  authorizerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;
}


// UpdateGraphqlApiRequestBodyLogConfig
/** 
 * The CloudWatch Logs configuration.
**/
export class UpdateGraphqlApiRequestBodyLogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=excludeVerboseContent" })
  excludeVerboseContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fieldLogLevel" })
  fieldLogLevel?: shared.FieldLogLevelEnum;
}


// UpdateGraphqlApiRequestBodyOpenIdConnectConfig
/** 
 * Describes an OpenID Connect configuration.
**/
export class UpdateGraphqlApiRequestBodyOpenIdConnectConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authTTL" })
  authTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=iatTTL" })
  iatTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;
}


// UpdateGraphqlApiRequestBodyUserPoolConfig
/** 
 * Describes an Amazon Cognito user pool configuration.
**/
export class UpdateGraphqlApiRequestBodyUserPoolConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appIdClientRegex" })
  appIdClientRegex?: string;

  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultAction" })
  defaultAction?: shared.DefaultActionEnum;

  @SpeakeasyMetadata({ data: "json, name=userPoolId" })
  userPoolId?: string;
}


export class UpdateGraphqlApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAuthenticationProviders", elemType: shared.AdditionalAuthenticationProvider })
  additionalAuthenticationProviders?: shared.AdditionalAuthenticationProvider[];

  @SpeakeasyMetadata({ data: "json, name=authenticationType" })
  authenticationType?: UpdateGraphqlApiRequestBodyAuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lambdaAuthorizerConfig" })
  lambdaAuthorizerConfig?: UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig;

  @SpeakeasyMetadata({ data: "json, name=logConfig" })
  logConfig?: UpdateGraphqlApiRequestBodyLogConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=openIDConnectConfig" })
  openIdConnectConfig?: UpdateGraphqlApiRequestBodyOpenIdConnectConfig;

  @SpeakeasyMetadata({ data: "json, name=userPoolConfig" })
  userPoolConfig?: UpdateGraphqlApiRequestBodyUserPoolConfig;

  @SpeakeasyMetadata({ data: "json, name=xrayEnabled" })
  xrayEnabled?: boolean;
}


export class UpdateGraphqlApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGraphqlApiPathParams;

  @SpeakeasyMetadata()
  headers: UpdateGraphqlApiHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateGraphqlApiRequestBody;
}


export class UpdateGraphqlApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateGraphqlApiResponse?: shared.UpdateGraphqlApiResponse;
}
