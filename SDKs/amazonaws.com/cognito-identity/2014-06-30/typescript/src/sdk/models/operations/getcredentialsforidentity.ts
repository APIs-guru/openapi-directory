import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCredentialsForIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceGetCredentialsForIdentity = "AWSCognitoIdentityService.GetCredentialsForIdentity"
}


export class GetCredentialsForIdentityHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCredentialsForIdentityXAmzTargetEnum;
}


export class GetCredentialsForIdentityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetCredentialsForIdentityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetCredentialsForIdentityInput;
}


export class GetCredentialsForIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  externalServiceException?: any;

  @SpeakeasyMetadata()
  getCredentialsForIdentityResponse?: shared.GetCredentialsForIdentityResponse;

  @SpeakeasyMetadata()
  internalErrorException?: any;

  @SpeakeasyMetadata()
  invalidIdentityPoolConfigurationException?: any;

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
