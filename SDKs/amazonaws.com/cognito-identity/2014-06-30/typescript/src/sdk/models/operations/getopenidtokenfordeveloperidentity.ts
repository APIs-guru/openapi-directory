import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentity = "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity"
}


export class GetOpenIdTokenForDeveloperIdentityHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum;
}


export class GetOpenIdTokenForDeveloperIdentityRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetOpenIdTokenForDeveloperIdentityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOpenIdTokenForDeveloperIdentityInput;
}


export class GetOpenIdTokenForDeveloperIdentityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  developerUserAlreadyRegisteredException?: any;

  @Metadata()
  getOpenIdTokenForDeveloperIdentityResponse?: shared.GetOpenIdTokenForDeveloperIdentityResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
