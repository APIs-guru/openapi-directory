import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateUserAttributesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateUserAttributes = "AWSCognitoIdentityProviderService.UpdateUserAttributes"
}


export class UpdateUserAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateUserAttributesXAmzTargetEnum;
}


export class UpdateUserAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateUserAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateUserAttributesRequest;
}


export class UpdateUserAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aliasExistsException?: any;

  @SpeakeasyMetadata()
  codeDeliveryFailureException?: any;

  @SpeakeasyMetadata()
  codeMismatchException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  expiredCodeException?: any;

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
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  passwordResetRequiredException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unexpectedLambdaException?: any;

  @SpeakeasyMetadata()
  updateUserAttributesResponse?: shared.UpdateUserAttributesResponse;

  @SpeakeasyMetadata()
  userLambdaValidationException?: any;

  @SpeakeasyMetadata()
  userNotConfirmedException?: any;

  @SpeakeasyMetadata()
  userNotFoundException?: any;
}
