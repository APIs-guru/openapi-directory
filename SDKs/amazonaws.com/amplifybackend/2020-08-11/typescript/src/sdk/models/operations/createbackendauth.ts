import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBackendAuthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class CreateBackendAuthHeaders extends SpeakeasyBase {
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


// CreateBackendAuthRequestBodyResourceConfig
/** 
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
export class CreateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthResources" })
  authResources?: shared.AuthResourcesEnum;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolConfigs" })
  identityPoolConfigs?: shared.CreateBackendAuthIdentityPoolConfig;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: shared.ServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolConfigs" })
  userPoolConfigs?: shared.CreateBackendAuthUserPoolConfig;
}


export class CreateBackendAuthRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironmentName" })
  backendEnvironmentName: string;

  @SpeakeasyMetadata({ data: "json, name=resourceConfig" })
  resourceConfig: CreateBackendAuthRequestBodyResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class CreateBackendAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBackendAuthPathParams;

  @SpeakeasyMetadata()
  headers: CreateBackendAuthHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBackendAuthRequestBody;
}


export class CreateBackendAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createBackendAuthResponse?: shared.CreateBackendAuthResponse;

  @SpeakeasyMetadata()
  gatewayTimeoutException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
