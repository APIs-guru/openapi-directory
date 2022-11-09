import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SignUpXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceSignUp = "AWSCognitoIdentityProviderService.SignUp"
}


export class SignUpHeaders extends SpeakeasyBase {
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
  xAmzTarget: SignUpXAmzTargetEnum;
}


export class SignUpRequest extends SpeakeasyBase {
  @Metadata()
  headers: SignUpHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SignUpRequest;
}


export class SignUpResponse extends SpeakeasyBase {
  @Metadata()
  codeDeliveryFailureException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidEmailRoleAccessPolicyException?: any;

  @Metadata()
  invalidLambdaResponseException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidPasswordException?: any;

  @Metadata()
  invalidSmsRoleAccessPolicyException?: any;

  @Metadata()
  invalidSmsRoleTrustRelationshipException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  signUpResponse?: shared.SignUpResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unexpectedLambdaException?: any;

  @Metadata()
  userLambdaValidationException?: any;

  @Metadata()
  usernameExistsException?: any;
}
