import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAuthorizerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizerName" })
  authorizerName: string;
}


export class CreateAuthorizerHeaders extends SpeakeasyBase {
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

export enum CreateAuthorizerRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


export class CreateAuthorizerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizerFunctionArn" })
  authorizerFunctionArn: string;

  @SpeakeasyMetadata({ data: "json, name=signingDisabled" })
  signingDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CreateAuthorizerRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=tokenKeyName" })
  tokenKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenSigningPublicKeys" })
  tokenSigningPublicKeys?: Map<string, string>;
}


export class CreateAuthorizerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAuthorizerPathParams;

  @SpeakeasyMetadata()
  headers: CreateAuthorizerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAuthorizerRequestBody;
}


export class CreateAuthorizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAuthorizerResponse?: shared.CreateAuthorizerResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
