import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ResendConfirmationCodeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceResendConfirmationCode = "AWSCognitoIdentityProviderService.ResendConfirmationCode"
}


export class ResendConfirmationCodeHeaders extends SpeakeasyBase {
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
  xAmzTarget: ResendConfirmationCodeXAmzTargetEnum;
}


export class ResendConfirmationCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ResendConfirmationCodeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ResendConfirmationCodeRequest;
}


export class ResendConfirmationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codeDeliveryFailureException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalErrorException?: any;

  @SpeakeasyMetadata()
  invalidEmailRoleAccessPolicyException?: any;

  @SpeakeasyMetadata()
  invalidLambdaResponseException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  invalidSmsRoleAccessPolicyException?: any;

  @SpeakeasyMetadata()
  invalidSmsRoleTrustRelationshipException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resendConfirmationCodeResponse?: shared.ResendConfirmationCodeResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unexpectedLambdaException?: any;

  @SpeakeasyMetadata()
  userLambdaValidationException?: any;

  @SpeakeasyMetadata()
  userNotFoundException?: any;
}
