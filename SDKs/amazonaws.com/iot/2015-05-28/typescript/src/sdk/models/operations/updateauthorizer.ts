import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAuthorizerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=authorizerName" })
  authorizerName: string;
}


export class UpdateAuthorizerHeaders extends SpeakeasyBase {
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

export enum UpdateAuthorizerRequestBodyStatusEnum {
    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


export class UpdateAuthorizerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizerFunctionArn" })
  authorizerFunctionArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: UpdateAuthorizerRequestBodyStatusEnum;

  @Metadata({ data: "json, name=tokenKeyName" })
  tokenKeyName?: string;

  @Metadata({ data: "json, name=tokenSigningPublicKeys" })
  tokenSigningPublicKeys?: Map<string, string>;
}


export class UpdateAuthorizerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAuthorizerPathParams;

  @Metadata()
  headers: UpdateAuthorizerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAuthorizerRequestBody;
}


export class UpdateAuthorizerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateAuthorizerResponse?: shared.UpdateAuthorizerResponse;
}
