import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportBackendAuthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class ImportBackendAuthHeaders extends SpeakeasyBase {
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


export class ImportBackendAuthRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityPoolId" })
  identityPoolId?: string;

  @Metadata({ data: "json, name=nativeClientId" })
  nativeClientId: string;

  @Metadata({ data: "json, name=userPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=webClientId" })
  webClientId: string;
}


export class ImportBackendAuthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImportBackendAuthPathParams;

  @Metadata()
  headers: ImportBackendAuthHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ImportBackendAuthRequestBody;
}


export class ImportBackendAuthResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  gatewayTimeoutException?: any;

  @Metadata()
  importBackendAuthResponse?: shared.ImportBackendAuthResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
