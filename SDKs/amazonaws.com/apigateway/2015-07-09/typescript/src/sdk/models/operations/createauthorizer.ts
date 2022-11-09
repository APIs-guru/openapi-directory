import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAuthorizerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class CreateAuthorizerHeaders extends SpeakeasyBase {
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

export enum CreateAuthorizerRequestBodyTypeEnum {
    Token = "TOKEN"
,    Request = "REQUEST"
,    CognitoUserPools = "COGNITO_USER_POOLS"
}


export class CreateAuthorizerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authType" })
  authType?: string;

  @Metadata({ data: "json, name=authorizerCredentials" })
  authorizerCredentials?: string;

  @Metadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @Metadata({ data: "json, name=authorizerUri" })
  authorizerUri?: string;

  @Metadata({ data: "json, name=identitySource" })
  identitySource?: string;

  @Metadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=providerARNs" })
  providerArNs?: string[];

  @Metadata({ data: "json, name=type" })
  type: CreateAuthorizerRequestBodyTypeEnum;
}


export class CreateAuthorizerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAuthorizerPathParams;

  @Metadata()
  headers: CreateAuthorizerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAuthorizerRequestBody;
}


export class CreateAuthorizerResponse extends SpeakeasyBase {
  @Metadata()
  authorizer?: shared.Authorizer;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
