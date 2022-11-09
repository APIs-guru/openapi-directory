import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBackendHeaders extends SpeakeasyBase {
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


export class CreateBackendRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId: string;

  @Metadata({ data: "json, name=appName" })
  appName: string;

  @Metadata({ data: "json, name=backendEnvironmentName" })
  backendEnvironmentName: string;

  @Metadata({ data: "json, name=resourceConfig" })
  resourceConfig?: Map<string, any>;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;
}


export class CreateBackendRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateBackendHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBackendRequestBody;
}


export class CreateBackendResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createBackendResponse?: shared.CreateBackendResponse;

  @Metadata()
  gatewayTimeoutException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
