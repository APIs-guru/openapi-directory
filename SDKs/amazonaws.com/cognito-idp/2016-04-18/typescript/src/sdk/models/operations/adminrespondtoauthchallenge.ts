import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AdminRespondToAuthChallengeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminRespondToAuthChallenge = "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge"
}


export class AdminRespondToAuthChallengeHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminRespondToAuthChallengeXAmzTargetEnum;
}


export class AdminRespondToAuthChallengeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AdminRespondToAuthChallengeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AdminRespondToAuthChallengeRequest;
}


export class AdminRespondToAuthChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adminRespondToAuthChallengeResponse?: shared.AdminRespondToAuthChallengeResponse;

  @SpeakeasyMetadata()
  aliasExistsException?: any;

  @SpeakeasyMetadata()
  codeMismatchException?: any;

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
  invalidPasswordException?: any;

  @SpeakeasyMetadata()
  invalidSmsRoleAccessPolicyException?: any;

  @SpeakeasyMetadata()
  invalidSmsRoleTrustRelationshipException?: any;

  @SpeakeasyMetadata()
  invalidUserPoolConfigurationException?: any;

  @SpeakeasyMetadata()
  mfaMethodNotFoundException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  passwordResetRequiredException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  softwareTokenMfaNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unexpectedLambdaException?: any;

  @SpeakeasyMetadata()
  userLambdaValidationException?: any;

  @SpeakeasyMetadata()
  userNotConfirmedException?: any;

  @SpeakeasyMetadata()
  userNotFoundException?: any;
}
