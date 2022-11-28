import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAuthorizerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizerId" })
  authorizerId: string;
}


export class UpdateAuthorizerHeaders extends SpeakeasyBase {
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

export enum UpdateAuthorizerRequestBodyAuthorizerTypeEnum {
    Request = "REQUEST",
    Jwt = "JWT"
}


// UpdateAuthorizerRequestBodyJwtConfiguration
/** 
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
export class UpdateAuthorizerRequestBodyJwtConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Audience" })
  audience?: string[];

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer?: string;
}


export class UpdateAuthorizerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerCredentialsArn" })
  authorizerCredentialsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizerPayloadFormatVersion" })
  authorizerPayloadFormatVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=authorizerType" })
  authorizerType?: UpdateAuthorizerRequestBodyAuthorizerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=authorizerUri" })
  authorizerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=enableSimpleResponses" })
  enableSimpleResponses?: boolean;

  @SpeakeasyMetadata({ data: "json, name=identitySource" })
  identitySource?: string[];

  @SpeakeasyMetadata({ data: "json, name=identityValidationExpression" })
  identityValidationExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=jwtConfiguration" })
  jwtConfiguration?: UpdateAuthorizerRequestBodyJwtConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateAuthorizerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAuthorizerPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAuthorizerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAuthorizerRequestBody;
}


export class UpdateAuthorizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateAuthorizerResponse?: shared.UpdateAuthorizerResponse;
}
