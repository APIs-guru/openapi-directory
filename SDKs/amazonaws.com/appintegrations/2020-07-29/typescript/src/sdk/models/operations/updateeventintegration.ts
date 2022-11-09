import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateEventIntegrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Name" })
  name: string;
}


export class UpdateEventIntegrationHeaders extends SpeakeasyBase {
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


export class UpdateEventIntegrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;
}


export class UpdateEventIntegrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEventIntegrationPathParams;

  @Metadata()
  headers: UpdateEventIntegrationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEventIntegrationRequestBody;
}


export class UpdateEventIntegrationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateEventIntegrationResponse?: Map<string, any>;
}
