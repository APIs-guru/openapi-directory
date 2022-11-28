import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloneBackendPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class CloneBackendHeaders extends SpeakeasyBase {
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


export class CloneBackendRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetEnvironmentName" })
  targetEnvironmentName: string;
}


export class CloneBackendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloneBackendPathParams;

  @SpeakeasyMetadata()
  headers: CloneBackendHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CloneBackendRequestBody;
}


export class CloneBackendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  cloneBackendResponse?: shared.CloneBackendResponse;

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
}
