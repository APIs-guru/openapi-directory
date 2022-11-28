import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ConfirmSignUpXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceConfirmSignUp = "AWSCognitoIdentityProviderService.ConfirmSignUp"
}


export class ConfirmSignUpHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ConfirmSignUpXAmzTargetEnum;
}


export class ConfirmSignUpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ConfirmSignUpHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConfirmSignUpRequest;
}


export class ConfirmSignUpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aliasExistsException?: any;

  @SpeakeasyMetadata()
  codeMismatchException?: any;

  @SpeakeasyMetadata()
  confirmSignUpResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  expiredCodeException?: any;

  @SpeakeasyMetadata()
  internalErrorException?: any;

  @SpeakeasyMetadata()
  invalidLambdaResponseException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyFailedAttemptsException?: any;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unexpectedLambdaException?: any;

  @SpeakeasyMetadata()
  userLambdaValidationException?: any;

  @SpeakeasyMetadata()
  userNotFoundException?: any;
}
