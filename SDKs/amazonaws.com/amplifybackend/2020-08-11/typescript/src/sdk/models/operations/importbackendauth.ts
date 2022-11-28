import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportBackendAuthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class ImportBackendAuthHeaders extends SpeakeasyBase {
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


export class ImportBackendAuthRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityPoolId" })
  identityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=nativeClientId" })
  nativeClientId: string;

  @SpeakeasyMetadata({ data: "json, name=userPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=webClientId" })
  webClientId: string;
}


export class ImportBackendAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportBackendAuthPathParams;

  @SpeakeasyMetadata()
  headers: ImportBackendAuthHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ImportBackendAuthRequestBody;
}


export class ImportBackendAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gatewayTimeoutException?: any;

  @SpeakeasyMetadata()
  importBackendAuthResponse?: shared.ImportBackendAuthResponse;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
