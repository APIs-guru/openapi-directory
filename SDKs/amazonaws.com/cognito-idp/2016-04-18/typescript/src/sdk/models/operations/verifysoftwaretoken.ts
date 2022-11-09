import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum VerifySoftwareTokenXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceVerifySoftwareToken = "AWSCognitoIdentityProviderService.VerifySoftwareToken"
}


export class VerifySoftwareTokenHeaders extends SpeakeasyBase {
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
  xAmzTarget: VerifySoftwareTokenXAmzTargetEnum;
}


export class VerifySoftwareTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: VerifySoftwareTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.VerifySoftwareTokenRequest;
}


export class VerifySoftwareTokenResponse extends SpeakeasyBase {
  @Metadata()
  codeMismatchException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  enableSoftwareTokenMfaException?: any;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidUserPoolConfigurationException?: any;

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
  userNotConfirmedException?: any;

  @Metadata()
  userNotFoundException?: any;

  @Metadata()
  verifySoftwareTokenResponse?: shared.VerifySoftwareTokenResponse;
}
