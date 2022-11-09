import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConfirmDeviceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceConfirmDevice = "AWSCognitoIdentityProviderService.ConfirmDevice"
}


export class ConfirmDeviceHeaders extends SpeakeasyBase {
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
  xAmzTarget: ConfirmDeviceXAmzTargetEnum;
}


export class ConfirmDeviceRequest extends SpeakeasyBase {
  @Metadata()
  headers: ConfirmDeviceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConfirmDeviceRequest;
}


export class ConfirmDeviceResponse extends SpeakeasyBase {
  @Metadata()
  confirmDeviceResponse?: shared.ConfirmDeviceResponse;

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
  invalidUserPoolConfigurationException?: any;

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
  userNotConfirmedException?: any;

  @Metadata()
  userNotFoundException?: any;

  @Metadata()
  usernameExistsException?: any;
}
