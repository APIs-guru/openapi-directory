import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdminCreateUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminCreateUser = "AWSCognitoIdentityProviderService.AdminCreateUser"
}


export class AdminCreateUserHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminCreateUserXAmzTargetEnum;
}


export class AdminCreateUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: AdminCreateUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdminCreateUserRequest;
}


export class AdminCreateUserResponse extends SpeakeasyBase {
  @Metadata()
  adminCreateUserResponse?: shared.AdminCreateUserResponse;

  @Metadata()
  codeDeliveryFailureException?: any;

  @Metadata()
  contentType: string;

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
  notAuthorizedException?: any;

  @Metadata()
  preconditionNotMetException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unexpectedLambdaException?: any;

  @Metadata()
  unsupportedUserStateException?: any;

  @Metadata()
  userLambdaValidationException?: any;

  @Metadata()
  userNotFoundException?: any;

  @Metadata()
  usernameExistsException?: any;
}
