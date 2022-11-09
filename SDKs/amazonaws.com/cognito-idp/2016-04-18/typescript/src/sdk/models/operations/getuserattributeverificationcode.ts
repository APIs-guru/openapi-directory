import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserAttributeVerificationCodeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetUserAttributeVerificationCode = "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode"
}


export class GetUserAttributeVerificationCodeHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetUserAttributeVerificationCodeXAmzTargetEnum;
}


export class GetUserAttributeVerificationCodeRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetUserAttributeVerificationCodeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetUserAttributeVerificationCodeRequest;
}


export class GetUserAttributeVerificationCodeResponse extends SpeakeasyBase {
  @Metadata()
  codeDeliveryFailureException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getUserAttributeVerificationCodeResponse?: shared.GetUserAttributeVerificationCodeResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidEmailRoleAccessPolicyException?: any;

  @Metadata()
  invalidLambdaResponseException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidSmsRoleAccessPolicyException?: any;

  @Metadata()
  invalidSmsRoleTrustRelationshipException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  passwordResetRequiredException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

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
