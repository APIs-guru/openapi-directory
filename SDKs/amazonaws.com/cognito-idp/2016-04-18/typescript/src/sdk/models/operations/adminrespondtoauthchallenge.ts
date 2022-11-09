import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdminRespondToAuthChallengeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminRespondToAuthChallenge = "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge"
}


export class AdminRespondToAuthChallengeHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminRespondToAuthChallengeXAmzTargetEnum;
}


export class AdminRespondToAuthChallengeRequest extends SpeakeasyBase {
  @Metadata()
  headers: AdminRespondToAuthChallengeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdminRespondToAuthChallengeRequest;
}


export class AdminRespondToAuthChallengeResponse extends SpeakeasyBase {
  @Metadata()
  adminRespondToAuthChallengeResponse?: shared.AdminRespondToAuthChallengeResponse;

  @Metadata()
  aliasExistsException?: any;

  @Metadata()
  codeMismatchException?: any;

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
  invalidSmsRoleAccessPolicyException?: any;

  @Metadata()
  invalidSmsRoleTrustRelationshipException?: any;

  @Metadata()
  invalidUserPoolConfigurationException?: any;

  @Metadata()
  mfaMethodNotFoundException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  passwordResetRequiredException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  softwareTokenMfaNotFoundException?: any;

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
