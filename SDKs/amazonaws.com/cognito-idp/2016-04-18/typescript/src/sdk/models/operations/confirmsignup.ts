import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConfirmSignUpXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceConfirmSignUp = "AWSCognitoIdentityProviderService.ConfirmSignUp"
}


export class ConfirmSignUpHeaders extends SpeakeasyBase {
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
  xAmzTarget: ConfirmSignUpXAmzTargetEnum;
}


export class ConfirmSignUpRequest extends SpeakeasyBase {
  @Metadata()
  headers: ConfirmSignUpHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConfirmSignUpRequest;
}


export class ConfirmSignUpResponse extends SpeakeasyBase {
  @Metadata()
  aliasExistsException?: any;

  @Metadata()
  codeMismatchException?: any;

  @Metadata()
  confirmSignUpResponse?: Map<string, any>;

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
  userNotFoundException?: any;
}
