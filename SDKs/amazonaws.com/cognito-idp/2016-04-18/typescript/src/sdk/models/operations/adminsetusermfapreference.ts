import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdminSetUserMfaPreferenceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminSetUserMfaPreference = "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference"
}


export class AdminSetUserMfaPreferenceHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminSetUserMfaPreferenceXAmzTargetEnum;
}


export class AdminSetUserMfaPreferenceRequest extends SpeakeasyBase {
  @Metadata()
  headers: AdminSetUserMfaPreferenceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdminSetUserMfaPreferenceRequest;
}


export class AdminSetUserMfaPreferenceResponse extends SpeakeasyBase {
  @Metadata()
  adminSetUserMfaPreferenceResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  passwordResetRequiredException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  userNotConfirmedException?: any;

  @Metadata()
  userNotFoundException?: any;
}
