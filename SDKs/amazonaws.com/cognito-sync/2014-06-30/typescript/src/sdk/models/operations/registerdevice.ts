import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegisterDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityId" })
  identityId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" })
  identityPoolId: string;
}


export class RegisterDeviceHeaders extends SpeakeasyBase {
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
}

export enum RegisterDeviceRequestBodyPlatformEnum {
    Apns = "APNS",
    ApnsSandbox = "APNS_SANDBOX",
    Gcm = "GCM",
    Adm = "ADM"
}


export class RegisterDeviceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform: RegisterDeviceRequestBodyPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=Token" })
  token: string;
}


export class RegisterDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegisterDevicePathParams;

  @SpeakeasyMetadata()
  headers: RegisterDeviceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RegisterDeviceRequestBody;
}


export class RegisterDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalErrorException?: any;

  @SpeakeasyMetadata()
  invalidConfigurationException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  registerDeviceResponse?: shared.RegisterDeviceResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
