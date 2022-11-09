import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBackendAuthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class UpdateBackendAuthHeaders extends SpeakeasyBase {
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


// UpdateBackendAuthRequestBodyResourceConfig
/** 
 * Defines the resource configuration when updating an authentication resource in your Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthResources" })
  authResources?: shared.AuthResourcesEnum;

  @Metadata({ data: "json, name=IdentityPoolConfigs" })
  identityPoolConfigs?: shared.UpdateBackendAuthIdentityPoolConfig;

  @Metadata({ data: "json, name=Service" })
  service?: shared.ServiceEnum;

  @Metadata({ data: "json, name=UserPoolConfigs" })
  userPoolConfigs?: shared.UpdateBackendAuthUserPoolConfig;
}


export class UpdateBackendAuthRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceConfig" })
  resourceConfig: UpdateBackendAuthRequestBodyResourceConfig;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class UpdateBackendAuthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBackendAuthPathParams;

  @Metadata()
  headers: UpdateBackendAuthHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBackendAuthRequestBody;
}


export class UpdateBackendAuthResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  gatewayTimeoutException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateBackendAuthResponse?: shared.UpdateBackendAuthResponse;
}
