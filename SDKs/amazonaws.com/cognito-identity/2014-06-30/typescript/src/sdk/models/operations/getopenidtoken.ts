import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOpenIdTokenXAmzTargetEnum {
    AwsCognitoIdentityServiceGetOpenIdToken = "AWSCognitoIdentityService.GetOpenIdToken"
}


export class GetOpenIdTokenHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOpenIdTokenXAmzTargetEnum;
}


export class GetOpenIdTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetOpenIdTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOpenIdTokenInput;
}


export class GetOpenIdTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  externalServiceException?: any;

  @Metadata()
  getOpenIdTokenResponse?: shared.GetOpenIdTokenResponse;

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
