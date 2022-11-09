import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConfirmForgotPasswordXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceConfirmForgotPassword = "AWSCognitoIdentityProviderService.ConfirmForgotPassword"
}


export class ConfirmForgotPasswordHeaders extends SpeakeasyBase {
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
  xAmzTarget: ConfirmForgotPasswordXAmzTargetEnum;
}


export class ConfirmForgotPasswordRequest extends SpeakeasyBase {
  @Metadata()
  headers: ConfirmForgotPasswordHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConfirmForgotPasswordRequest;
}


export class ConfirmForgotPasswordResponse extends SpeakeasyBase {
  @Metadata()
  codeMismatchException?: any;

  @Metadata()
  confirmForgotPasswordResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  expiredCodeException?: any;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidLambdaResponseException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidPasswordException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyFailedAttemptsException?: any;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unexpectedLambdaException?: any;

  @Metadata()
  userLambdaValidationException?: any;

  @Metadata()
  userNotConfirmedException?: any;

  @Metadata()
  userNotFoundException?: any;
}
