import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloneBackendPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class CloneBackendHeaders extends SpeakeasyBase {
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


export class CloneBackendRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetEnvironmentName" })
  targetEnvironmentName: string;
}


export class CloneBackendRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloneBackendPathParams;

  @Metadata()
  headers: CloneBackendHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CloneBackendRequestBody;
}


export class CloneBackendResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  cloneBackendResponse?: shared.CloneBackendResponse;

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
}
