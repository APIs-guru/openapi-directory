import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateUserPoolClientXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceCreateUserPoolClient = "AWSCognitoIdentityProviderService.CreateUserPoolClient"
}


export class CreateUserPoolClientHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateUserPoolClientXAmzTargetEnum;
}


export class CreateUserPoolClientRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateUserPoolClientHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateUserPoolClientRequest;
}


export class CreateUserPoolClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createUserPoolClientResponse?: shared.CreateUserPoolClientResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidOAuthFlowException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  scopeDoesNotExistException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
