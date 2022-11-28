import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentity = "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity"
}


export class GetOpenIdTokenForDeveloperIdentityHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum;
}


export class GetOpenIdTokenForDeveloperIdentityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetOpenIdTokenForDeveloperIdentityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetOpenIdTokenForDeveloperIdentityInput;
}


export class GetOpenIdTokenForDeveloperIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  developerUserAlreadyRegisteredException?: any;

  @SpeakeasyMetadata()
  getOpenIdTokenForDeveloperIdentityResponse?: shared.GetOpenIdTokenForDeveloperIdentityResponse;

  @SpeakeasyMetadata()
  internalErrorException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
