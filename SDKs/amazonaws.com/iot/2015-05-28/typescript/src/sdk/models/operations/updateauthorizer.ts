import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAuthorizerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizerName" })
  authorizerName: string;
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

export enum UpdateAuthorizerRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


export class UpdateAuthorizerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerFunctionArn" })
  authorizerFunctionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateAuthorizerRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tokenKeyName" })
  tokenKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenSigningPublicKeys" })
  tokenSigningPublicKeys?: Map<string, string>;
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
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateAuthorizerResponse?: shared.UpdateAuthorizerResponse;
}
