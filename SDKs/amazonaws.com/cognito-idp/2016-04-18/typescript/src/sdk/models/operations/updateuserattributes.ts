import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateUserAttributesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateUserAttributes = "AWSCognitoIdentityProviderService.UpdateUserAttributes"
}


export class UpdateUserAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateUserAttributesXAmzTargetEnum;
}


export class UpdateUserAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateUserAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateUserAttributesRequest;
}


export class UpdateUserAttributesResponse extends SpeakeasyBase {
  @Metadata()
  aliasExistsException?: any;

  @Metadata()
  codeDeliveryFailureException?: any;

  @Metadata()
  codeMismatchException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  expiredCodeException?: any;

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
  updateUserAttributesResponse?: shared.UpdateUserAttributesResponse;

  @Metadata()
  userLambdaValidationException?: any;

  @Metadata()
  userNotConfirmedException?: any;

  @Metadata()
  userNotFoundException?: any;
}
