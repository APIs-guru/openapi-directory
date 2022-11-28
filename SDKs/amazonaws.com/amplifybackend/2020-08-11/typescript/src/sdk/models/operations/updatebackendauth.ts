import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBackendAuthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class UpdateBackendAuthHeaders extends SpeakeasyBase {
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


// UpdateBackendAuthRequestBodyResourceConfig
/** 
 * Defines the resource configuration when updating an authentication resource in your Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthResources" })
  authResources?: shared.AuthResourcesEnum;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolConfigs" })
  identityPoolConfigs?: shared.UpdateBackendAuthIdentityPoolConfig;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: shared.ServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolConfigs" })
  userPoolConfigs?: shared.UpdateBackendAuthUserPoolConfig;
}


export class UpdateBackendAuthRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceConfig" })
  resourceConfig: UpdateBackendAuthRequestBodyResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class UpdateBackendAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBackendAuthPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBackendAuthHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateBackendAuthRequestBody;
}


export class UpdateBackendAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gatewayTimeoutException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateBackendAuthResponse?: shared.UpdateBackendAuthResponse;
}
