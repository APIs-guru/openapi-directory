import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RespondToAuthChallengeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceRespondToAuthChallenge = "AWSCognitoIdentityProviderService.RespondToAuthChallenge"
}


export class RespondToAuthChallengeHeaders extends SpeakeasyBase {
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
  xAmzTarget: RespondToAuthChallengeXAmzTargetEnum;
}


export class RespondToAuthChallengeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RespondToAuthChallengeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RespondToAuthChallengeRequest;
}


export class RespondToAuthChallengeResponse extends SpeakeasyBase {
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
  respondToAuthChallengeResponse?: shared.RespondToAuthChallengeResponse;

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
