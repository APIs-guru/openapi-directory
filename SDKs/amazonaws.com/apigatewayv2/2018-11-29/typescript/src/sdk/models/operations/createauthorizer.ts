import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAuthorizerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
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

export enum CreateAuthorizerRequestBodyAuthorizerTypeEnum {
    Request = "REQUEST"
,    Jwt = "JWT"
}


// CreateAuthorizerRequestBodyJwtConfiguration
/** 
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
export class CreateAuthorizerRequestBodyJwtConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Audience" })
  audience?: string[];

  @Metadata({ data: "json, name=Issuer" })
  issuer?: string;
}


export class CreateAuthorizerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerCredentialsArn" })
  authorizerCredentialsArn?: string;

  @Metadata({ data: "json, name=authorizerPayloadFormatVersion" })
  authorizerPayloadFormatVersion?: string;

  @Metadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @Metadata({ data: "json, name=authorizerType" })
  authorizerType: CreateAuthorizerRequestBodyAuthorizerTypeEnum;

  @Metadata({ data: "json, name=authorizerUri" })
  authorizerUri?: string;

  @Metadata({ data: "json, name=enableSimpleResponses" })
  enableSimpleResponses?: boolean;

  @Metadata({ data: "json, name=identitySource" })
  identitySource: string[];

  @Metadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;

  @Metadata({ data: "json, name=jwtConfiguration" })
  jwtConfiguration?: CreateAuthorizerRequestBodyJwtConfiguration;

  @Metadata({ data: "json, name=name" })
  name: string;
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
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAuthorizerResponse?: shared.CreateAuthorizerResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
