import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityId" })
  identityId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" })
  identityPoolId: string;
}


export class RegisterDeviceHeaders extends SpeakeasyBase {
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
}

export enum RegisterDeviceRequestBodyPlatformEnum {
    Apns = "APNS"
,    ApnsSandbox = "APNS_SANDBOX"
,    Gcm = "GCM"
,    Adm = "ADM"
}


export class RegisterDeviceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Platform" })
  platform: RegisterDeviceRequestBodyPlatformEnum;

  @Metadata({ data: "json, name=Token" })
  token: string;
}


export class RegisterDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegisterDevicePathParams;

  @Metadata()
  headers: RegisterDeviceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RegisterDeviceRequestBody;
}


export class RegisterDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidConfigurationException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  registerDeviceResponse?: shared.RegisterDeviceResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
