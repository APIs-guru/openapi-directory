import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBackendAuthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class CreateBackendAuthHeaders extends SpeakeasyBase {
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


// CreateBackendAuthRequestBodyResourceConfig
/** 
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
export class CreateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthResources" })
  authResources?: shared.AuthResourcesEnum;

  @Metadata({ data: "json, name=IdentityPoolConfigs" })
  identityPoolConfigs?: shared.CreateBackendAuthIdentityPoolConfig;

  @Metadata({ data: "json, name=Service" })
  service?: shared.ServiceEnum;

  @Metadata({ data: "json, name=UserPoolConfigs" })
  userPoolConfigs?: shared.CreateBackendAuthUserPoolConfig;
}


export class CreateBackendAuthRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendEnvironmentName" })
  backendEnvironmentName: string;

  @Metadata({ data: "json, name=resourceConfig" })
  resourceConfig: CreateBackendAuthRequestBodyResourceConfig;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class CreateBackendAuthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateBackendAuthPathParams;

  @Metadata()
  headers: CreateBackendAuthHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBackendAuthRequestBody;
}


export class CreateBackendAuthResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createBackendAuthResponse?: shared.CreateBackendAuthResponse;

  @Metadata()
  gatewayTimeoutException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
